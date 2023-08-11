import Image from "next/image";
import styles from "./Stylepages/page.module.css";
export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div class="container-fluid">
      <div class="row my-2">
        <div class="col py-5">
          <img src="/background.jpg" class="img-fluid rounded"></img>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 my-2 ">
          <div class="card">
            <div class="card-body">
              <div class="card-title">This is a test</div>
              <div class="card-text">
                Lorem ipusm jay bajrang afsfsf asddddddd ssssssssssss
                kkkkkkkkkkkk jai hanuma gyan gunsager
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 my-2 ">
          <div class="card">
            <div class="card-body">
              <div class="card-title">This is a test</div>
              <div class="card-text">
                Lorem ipusm jay bajrang afsfsf asddddddd ssssssssssss
                kkkkkkkkkkkk jai hanuma gyan gunsager
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 my-2 ">
          <div class="card">
            <div class="card-body">
              <div class="card-title">This is a test</div>
              <div class="card-text">
                Lorem ipusm jay bajrang afsfsf asddddddd ssssssssssss
                kkkkkkkkkkkk jai hanuma gyan gunsager
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 my-2 ">
          <div class="card">
            <div class="card-body">
              <div class="card-title">This is a test</div>
              <div class="card-text">
                Lorem ipusm jay bajrang afsfsf asddddddd ssssssssssss
                kkkkkkkkkkkk jai hanuma gyan gunsager
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 my-2 ">
          <div class="card">
            <div class="card-body">
              <div class="card-title">This is a test</div>
              <div class="card-text">
                Lorem ipusm jay bajrang afsfsf asddddddd ssssssssssss
                kkkkkkkkkkkk jai hanuma gyan gunsager
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 my-2 ">
          <div class="card">
            <div class="card-body">
              <div class="card-title">This is a test</div>
              <div class="card-text">
                Lorem ipusm jay bajrang afsfsf asddddddd ssssssssssss
                kkkkkkkkkkkk jai hanuma gyan gunsager
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
