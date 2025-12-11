"use client";
import Image from 'next/image'
import { useState, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Info = () => {

  return (
    <div className="w-5/6 mx-auto">

      <div className="flex item-center justify-center">
        <div className="card">
          <div className="card-body space-x-4 py-1">
            <p>
              Iga Bielawska (b.1999) is a Polish-born fine artist living and working in London.
            </p>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-center">
        <div className="card">
          <div className="card-body space-x-4 py-1">
            <p>
              Iga is a figurative oil painter exploring the female gaze through her study of the broad female experience.
            </p>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-center">
        <div className="card">
          <div className="card-body space-x-4 py-1">
            <p>
              More recently, she ventured into the world of the occult, blurring the lines between reality and mysticism.
            </p>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-center">
        <div className="card">
          <div className="card-body space-x-4 py-1">
            <p>
              Her latest series, Nymphs, expands on these themes, drawing from Slavic folklore.
            </p>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-center">
        <div className="card lg:card-side bg-base-100">
          <div className="card-body">
            <p>
              For any enquiries, please contact:
            </p>
            <p>
              <a className="link" href="mailto:igabielawska7@gmail.com">igabielawska7@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-center">
        <div className="card lg:card-side bg-base-100">
          <div className="card-body">

            <a href="https://www.instagram.com/iga.bielawska/" target='_blank'>

              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 24 24">
                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
              </svg>
              <b>@iga.bielawska</b>
            </a>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Info;
Info
