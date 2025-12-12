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
            <b>
              Group Exhibitions
            </b>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-center">
        <div className="card">
          <div className="card-body space-x-4 py-1">
            <p>
              2022  <i>Hysterical</i>, no format Gallery, London
            </p>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-center">
        <div className="card">
          <div className="card-body space-x-4 py-1">
            <p>
              2022  <i>Return to Flesh</i>, The Room, London
            </p>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-center">
        <div className="card">
          <div className="card-body space-x-4 py-1">
            <p>
              2022  <i>ROE</i>, Satellite Gallery, London
            </p>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-center">
        <div className="card">
          <div className="card-body space-x-4 py-1">
            <p>
              2023  <i>Wilderness of Being</i>, HdM Gallery, London
            </p>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-center">
        <div className="card">
          <div className="card-body space-x-4 py-1">
            <p>
              2023  <i>Look mum no hands</i> - paintings at the crossroads, BeAdvisors, London
            </p>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-center">
        <div className="card">
          <div className="card-body space-x-4 py-1">
            <p>
              2023  <i>Skin Deep</i>, Studio West, London 
            </p>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-center">
        <div className="card">
          <div className="card-body space-x-4 py-1">
            <p>
              2023  <i>A Matter of Perspectives</i>, Lilya Art Gallery, London
            </p>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-center">
        <div className="card lg:card-side bg-base-100">
          <div className="card-body items-center text-center">
            <h2 class="card-title">Press</h2>

            <p>
              <a className="link" href="https://www.itsnicethat.com/articles/iga-bielawska-art-discover-030124">"Iga Bielawska paints a world that incorporates womanhood, queerness and the zodiac"</a> - <i>It's Nice That</i>
            </p>

            <p>
              <a className="link" href="https://www.dazeddigital.com/art-photography/article/55697/1/hysterical-exhibition-spotlights-the-young-people-fusing-art-and-activism">"This exhibition spotlights the young people fusing art and activism"</a> - <i>Dazed</i>
            </p>

          </div>
        </div>
      </div>


    </div>
  );
};

export default Info;
Info
