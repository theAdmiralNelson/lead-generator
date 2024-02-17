import React from "react";
import { Script } from "gatsby";

export default function report() {
  return (
    <div className='bg-gray-100'>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-2xl max-w-5xl my-20 font-bold text-center'>
          Wondering how your Google Business Profile stacks up? Get your free
          report now!
        </p>
      </div>
      <Script
        src='https://www.local-marketing-reports.com/m/assets-v2/lead-gen/js/external/widget-builder.js'
        data-widget-id='0a9a51f5ba7145a572ceec81457f06a8fadb6e10'
      ></Script>
    </div>
  );
}

export const Head = () => (
  <>
    <title>
      Get your free online presence health check - Fierce Island Creative
    </title>
    <meta
      name='description'
      content="We'll send you a free report showing how well your website and your Google Business Profile is performing."
    />

    <meta charSet='utf-8' />

    <meta name='viewport' content='width=device-width, initial-scale=1' />

    <meta name='author' content='Fierce Island Creative' />

    <meta name='robots' content='index, follow' />

    <meta
      property='og:title'
      content='Get your free online presence health check - Fierce Island Creative'
    />
    <meta
      property='og:description'
      content="We'll send you a free report showing how well your website and your Google Business Profile is performing."
    />
    <meta
      property='og:image'
      content='https://boise-web-design.s3.us-west-2.amazonaws.com/logo.png'
    />
    <meta property='og:url' content='https://boisewebdesign.city/faq' />
    <meta property='og:type' content='website' />

    <meta name='twitter:card' content='summary_large_image' />
    <meta
      name='twitter:title'
      content='Get your free online presence health check - Fierce Island Creative'
    />
    <meta
      name='twitter:description'
      content="We'll send you a free report showing how well your website and your Google Business Profile is performing."
    />
    <meta
      name='twitter:image'
      content='https://boise-web-design.s3.us-west-2.amazonaws.com/logo.png'
    />
  </>
);
