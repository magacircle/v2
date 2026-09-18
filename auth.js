import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const cfg = window.MAGA_AUTH_CONFIG || {};
const statusEl = document.getElementById("status");
const googleBtn = document.getElementById("googleBtn");
const appleBtn = document.getElementById("appleBtn");
const signInButtons = document.getElementById("signInButtons");
const profilePanel = document.getElementById("profilePanel");
const avatarEl = document.getElementById("avatar");
const profileNameEl = document.getElementById("profileName");
const profileEmailEl = document.getElementById("profileEmail");
const continueBtn = document.getElementById("continueBtn");
const signOutBtn = document.getElementById("signOutBtn");

function setStatus(message, error=false){ statusEl.textContent=message||""; statusEl.style.color=error?"#c8a39a":""; }
function isConfigured(){return /^https:\/\/[^/]+\.supabase\.co$/.test(cfg.supabaseUrl||"") && !!cfg.supabasePublishableKey && !/^YOUR_/.test(cfg.supabasePublishableKey);}
function params(){return new URLSearchParams(location.search);}
function returnTarget(){
  const requested=params().get("returnTo");
  if(requested && /^(index|quiz|auth)\.html$/.test(requested)) return requested;
  return "quiz.html";
}
function inviteRef(){
  const ref=params().get("ref");
  if(ref) localStorage.setItem("mc_invite_ref",ref);
  return ref || localStorage.getItem("mc_invite_ref") || "";
}
function redirectAfterAuth(){
  const target=returnTarget();
  const ref=inviteRef();
  if(target==="auth.html") return "index.html"+(ref?`?ref=${encodeURIComponent(ref)}`:"");
  return target+(ref?`?ref=${encodeURIComponent(ref)}`:"");
}

if(!isConfigured()){
  googleBtn.disabled=true; appleBtn.disabled=true;
  setStatus("Authentication is not connected yet. Add the Supabase project values in auth-config.js to enable sign-in.");
}else{
  const supabase=createClient(cfg.supabaseUrl,cfg.supabasePublishableKey);

  async function signIn(provider){
    googleBtn.disabled=true; appleBtn.disabled=true;
    setStatus(`Connecting to ${provider === "google" ? "Google" : "Apple"}…`);
    const {error}=await supabase.auth.signInWithOAuth({
      provider,
      options:{redirectTo:`${location.origin}${location.pathname}?returnTo=${encodeURIComponent(returnTarget())}${inviteRef()?`&ref=${encodeURIComponent(inviteRef())}`:""}`}
    });
    if(error){
      googleBtn.disabled=false; appleBtn.disabled=false;
      setStatus(error.message||"Sign-in could not be started.",true);
    }
  }

  function renderSession(session){
    const user=session?.user;
    if(!user){
      signInButtons.style.display="grid";
      profilePanel.classList.remove("visible");
      return;
    }
    const meta=user.user_metadata||{};
    const name=meta.full_name || meta.name || [meta.given_name,meta.family_name].filter(Boolean).join(" ") || "Builder";
    const email=user.email||"";
    const avatar=meta.avatar_url || meta.picture || "";
    signInButtons.style.display="none";
    profilePanel.classList.add("visible");
    profileNameEl.textContent=name;
    profileEmailEl.textContent=email;
    if(avatar){ avatarEl.innerHTML=""; avatarEl.style.backgroundImage=`url("${avatar.replace(/"/g,"%22")}")`; avatarEl.style.backgroundSize="cover"; avatarEl.style.backgroundPosition="center"; }
    else { avatarEl.textContent=(name.trim()[0]||"B").toUpperCase(); avatarEl.style.backgroundImage="none"; }
    setStatus("You're signed in.");
  }

  googleBtn.addEventListener("click",()=>signIn("google"));
  appleBtn.addEventListener("click",()=>signIn("apple"));
  continueBtn.addEventListener("click",()=>{ location.href=redirectAfterAuth(); });
  signOutBtn.addEventListener("click",async()=>{
    const {error}=await supabase.auth.signOut();
    if(error){setStatus(error.message||"Could not sign out.",true);return;}
    setStatus("You've been signed out.");
    renderSession(null);
    googleBtn.disabled=false; appleBtn.disabled=false;
  });

  supabase.auth.onAuthStateChange((_event,session)=>renderSession(session));
  const {data}=await supabase.auth.getSession();
  renderSession(data.session);
}
