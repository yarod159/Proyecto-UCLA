import './error404.css'

export default function Error404() {
  return (
    <section className="page_404">
    <div className="container-error">
      <div className="row">
        <div className="col-sm-12">
          <div className="col-sm-10 col-sm-offset-1 text-center">

          <div className="four_zero_four_bg">
               <h1 className="text-center">404</h1>
               <iframe src="https://giphy.com/embed/9J7tdYltWyXIY" width="480" height="404" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/internet-google-chrone-9J7tdYltWyXIY">via GIPHY</a></p>
         </div>

             
            

            <div className="contant_box_404">
              <h3 className="h2">Look like you're lost</h3>

              <p>The page you are looking for is not available!</p>

              <a href="/" className="link_404">Go to Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
