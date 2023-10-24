import React from 'react'

export default function Footter() {
  return (
<>
  <footer className="bg-dark text-center text-white">
    <div className="container p-4">
      
      <section className>
        <form action>
          <div className="row d-flex justify-content-center">
            <div className="col-auto">
              <p className="pt-2">
                <strong>Email address </strong>
              </p>
            </div>
            <div className="col-md-4 col-12">
              <div className="form-outline form-white mb-4">
                <input type="email" id="form5Example21" className="form-control" />
              </div>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-outline-light mb-4">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </section>
      <section className="mb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
          repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
          eum harum corrupti dicta, aliquam sequi voluptate quas.
        </p>
      </section>

    </div>
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2023 Copyright :
      <a className="text-white mx-1 " href=""> Thara'a Shehadeh.com</a>
    </div>
  </footer>
</>

  )
}


