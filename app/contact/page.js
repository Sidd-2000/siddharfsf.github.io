// `app/dashboard/page.js` is the UI for the `/dashboard` URL
export default function Page() {
    return <div class="container-fluid justify-content-center m-auto">
      <div class="row">
        <div class="col-sm-6 border border-2 overflow-auto">
          <div class="image">
            <img src="/contactus.jpg" class= "" alt=""/>
          </div>
        </div>
        <div class="col-sm-6 ">
          <h1 class="text-lg text-center py-2">Contact Us</h1>
          <div class="row">
            <div class="col-sm-6">
          <form class="form-horizontal border-2 border-primary" action="">
            <div class="form-group">
              <label for="name" class="form-label mt-2">Full Name</label>
              <input type="text" class="form-control" placeholder="Enter Your Full name "/>
            </div>
            <div class="form-group">
              <label for="name" class="form-label mt-2">Email</label>
              <input type="text" class="form-control" placeholder="Enter Your Email "/>
            </div>
            <div class="form-group">
              <label for="textarea" class="form-label mt-2">Message</label>
              <textarea class="form-control" placeholder="Enter your Message" rows="5" name="message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary mt-2 mb-2">contact us</button>
          </form>
          </div>
          <div class="col-sm-6">
            <h4 class="text-xs">contact</h4>
            <p class="" readonly>siddharthsharma7678@gmail.com</p>
            <h4 class="text-xs">phone</h4>
            <p class="" readonly>+91 7738783610</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  }