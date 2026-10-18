"use client";

import React from "react";

const VideoAboutSchool = () => {
  return (
    <section className="py-16 px-4 bg-blue-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          এক নজরে আমাদের বিদ্যালয়
        </h2>

        <iframe
          src="https://drive.google.com/file/d/1sevknjqp-2w9edF_0CyPytLqG0EQtnSG/preview"
          title="School Video"
          className="w-full aspect-video rounded-xl"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default VideoAboutSchool;