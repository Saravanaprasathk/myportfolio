import React from "react";
import { Menu } from "../menu";
export function Contact() {
  return (
    <>
      <Menu />
      <section className="contact-page ">
        <div>
          <h2 className="text-center contact-heading ">Contact</h2>
          <div className="container">

            <div>
              <input type="text" placeholder="Your name" className="p-3 my-3" ></input>
            </div>
            <div>
              <input type="text" placeholder="Your Email" className="p-3 my-3" ></input>
            </div>
            <div>
              <input type="text" placeholder="Subject" className="p-3 my-3" ></input>
            </div>
            <div>
              <textarea row="10" cols="25" placeholder="message" className=" my-3" ></textarea>
            </div>
            <button type="button" class="btn btn-outline-dark">submit</button>
          </div>

          

        </div>
      </section>


    </>
  );
}