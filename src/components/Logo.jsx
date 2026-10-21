import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <div className="flex items-center gap-3">
                                  <div className="bg-white h-15 w-15 rounded-2xl ">
                                      <Image
                                          width={300}
                                          height={300}
                                          src="https://i.ibb.co.com/4Rx2df0Z/Whats-App-Image-2026-10-19-at-4-45-31-PM-removebg-preview.png"
                                          alt="School Logo"
                                          className=""
                                      />
                                  </div>
                                  <div>
                                      <p className="text-2xl font-semibold text-white">A B I S</p>
                                  </div>
                              </div>
    );
};

export default Logo;