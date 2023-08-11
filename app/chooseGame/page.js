// `app/dashboard/page.js` is the UI for the `/dashboard` URL
import Image from "next/image";
import "@/app/Stylepages/chooseGame.css";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4">
            <Link href="/games/cricket" legacyBehavior>
              <a class="card-link">
                <div class="card card-1">
                  <h3>Cricket</h3>
                  <p>
                    A curated set of ES5/ES6/TypeScript wrappers for plugins to
                    easily add any native functionality to your Ionic apps.
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div class="col-md-4">
            <Link href="/your-link-here" legacyBehavior>
              <a class="card-link">
                <div class="card card-1">
                  <h3>kabaddi</h3>
                  <p>
                    A curated set of ES5/ES6/TypeScript wrappers for plugins to
                    easily add any native functionality to your Ionic apps.
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div class="col-md-4">
            <Link href="/your-link-here" legacyBehavior>
              <a class="card-link">
                <div class="card card-1">
                  <h3>Tennis</h3>
                  <p>
                    A curated set of ES5/ES6/TypeScript wrappers for plugins to
                    easily add any native functionality to your Ionic apps.
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div class="col-md-4">
            <Link href="/your-link-here" legacyBehavior>
              <a class="card-link">
                <div class="card card-1">
                  <h3>Football</h3>
                  <p>
                    A curated set of ES5/ES6/TypeScript wrappers for plugins to
                    easily add any native functionality to your Ionic apps.
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div class="col-md-4">
            <Link href="/your-link-here" legacyBehavior>
              <a class="card-link">
                <div class="card card-1">
                  <h3>Hockey</h3>
                  <p>
                    A curated set of ES5/ES6/TypeScript wrappers for plugins to
                    easily add any native functionality to your Ionic apps.
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div class="col-md-4">
            <Link href="/your-link-here" legacyBehavior>
              <a class="card-link">
                <div class="card card-1">
                  <h3>Tap to login</h3>
                  <p>
                    A curated set of ES5/ES6/TypeScript wrappers for plugins to
                    easily add any native functionality to your Ionic apps.
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div class="col-md-4">
            <Link href="/your-link-here" legacyBehavior>
              <a class="card-link">
                <div class="card card-1">
                  <h3>Learn</h3>
                  <p>
                    A curated set of ES5/ES6/TypeScript wrappers for plugins to
                    easily add any native functionality to your Ionic apps.
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div class="col-md-4">
            <Link href="/your-link-here" legacyBehavior>
              <a class="card-link">
                <div class="card card-1">
                  <h3>Contact Us</h3>
                  <p>
                    A curated set of ES5/ES6/TypeScript wrappers for plugins to
                    easily add any native functionality to your Ionic apps.
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div class="col-md-4">
            <Link href="/your-link-here" legacyBehavior>
              <a class="card-link">
                <div class="card card-1">
                  <h3>Feedback</h3>
                  <p>
                    A curated set of ES5/ES6/TypeScript wrappers for plugins to
                    easily add any native functionality to your Ionic apps.
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
