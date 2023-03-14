import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { users } from '../common/fetchUser';
import { app } from './firebaseApi';

const auth = getAuth(app);
const authForm = document.querySelector('.auth-form');
const userEl = document.querySelector('.user-name-header');
const userMobEl = document.querySelector('.user-name-mobile');
const signInBtn = document.querySelector('.sign-in-btn');
const signInBtnMob = document.querySelector('.sign-in-btn-mob');
const signOutBtn = document.querySelector('.log-out-btn');
const signOutBtnMob = document.querySelector('.log-out-btn-mob');
const authMenu = document.querySelector('.auth-menu');

authForm.addEventListener('submit', onAuthSubmit);

async function onAuthSubmit(e) {
  e.preventDefault();
  const { email, password } = e.target.elements;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const user = userCredential.user;

    users.updateProfile(user.displayName, user.email, user.uid);
    changeVisual();
  } catch {
    Report.failure('This user is not registred');
  }
}

function changeVisual() {
  userEl.textContent = users.getName();
  userMobEl.textContent = users.getName();
  signInBtn.disabled = 'true';
  signInBtnMob.disabled = 'true';
  signOutBtn.removeAttribute('disabled');
  signOutBtnMob.removeAttribute('disabled');
  authMenu.classList.add('is-hidden');
  document.body.classList.remove('modal-is-open');
}
