import styles from '../Stylepages/login.css';
import Image from 'next/image';
export default function Page() {
    return <section>
      <div class="container-fluid d-flex justify-center">
        <div class='row m-auto mt-5'>
        <div class='col'>
          <form>
            <div class='form-group'>
              <label className='form-label' for='formEmail'>Email</label> 
              <input type="email" className="form-control" id='formEmail' placeholder="Email" />
            </div>
            <div class='form-group'>
              <label className='' for='formPassword'>Password</label> 
              <input type="password" className="form-control" id='formapassword' placeholder="Password" />
            </div>
            <div class='form-group'>
            {/* <!-- Checkbox --> */}
            <div class="form-check">
              <label class="" for="form1Example3"> Remember me </label>
              <input class="" type="checkbox" value="" id="form1Example3" checked />
            </div>
            <a href="#!">Forgot password?</a>
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>
          <a class="btn btn-primary btn-lg btn-block py-2"  href="#!"
            role="button">
            <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <a class="btn btn-primary btn-lg py-2 btn-block" href="#!"
            role="button">
            <i class="fab fa-twitter me-2 "></i>Continue with Twitter</a>
          </form>
        </div>
        </div>
      </div>
    </section>
  }