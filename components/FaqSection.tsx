"use client";
import React, { FC } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { AiOutlinePlus } from "react-icons/ai";
import EmailForm from "./EmailForm";

const items = [
  {
    header: "What is Netflix?",
    content: (
      <>
        <span className="block mb-4">
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more –
          onthousands of internet-connected devices.
        </span>
        <span>
          You can watch as much as you want, whenever you want, without a single
          ad – all for one low monthly price. There's always something new to
          discover, and new TV shows and movies are added every week!
        </span>
      </>
    ),
  },
  {
    header: "How much does Netflix cost?",
    content: (
      <span>
        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming
        device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a
        month. No extra costs, no contracts.
      </span>
    ),
  },
  {
    header: "Where can i watch?",
    content: (
      <>
        <span className="block mb-4">
          Watch anywhere, anytime. Sign in with your Netflix account to watch
          instantly on the web at netflix.com from your personal computer or on
          any internet-connected device that offers the Netflix app, including
          smart TVs, smartphones, tablets, streaming media players and game
          consoles.
        </span>
        <span>
          You can also download your favourite shows with the iOS, Android, or
          Windows 10 app. Use downloads to watch while you're on the go and
          without an internet connection. Take Netflix with you anywhere.
        </span>
        ,
      </>
    ),
  },
  {
    header: "What can i watch on Netflix?",
    content: (
      <span>
        Netflix has an extensive library of feature films, documentaries, TV
        shows, anime, award-winning Netflix originals, and more. Watch as much
        as you want, anytime you want.
      </span>
    ),
  },
  {
    header: "Is Netflix good for kids?",
    content: (
      <>
        <span className="block mb-4">
          The Netflix Kids experience is included in your membership to give
          parents control while kids enjoy family-friendly TV shows and films in
          their own space.
        </span>
        <span>
          Kids profiles come with PIN-protected parental controls that let you
          restrict the maturity rating of content kids can watch and block
          specific titles you don’t want kids to see.
        </span>
        ,
      </>
    ),
  },
];

const FaqSection = () => {
  return (
    <div className="h-auto mb-4 flex flex-col gap-8 items-center pt-10 pb-20">
      <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-black">
        Frequently Asked Questions
      </h2>
      <Accordion
        transition
        transitionTimeout={200}
        className="w-full gap-2 flex flex-col text-lg md:text-2xl px-5 md:px-12 lg:px-24"
      >
        {items.map((item, id) => {
          return (
            <AccordionItem
              buttonProps={{
                className: ({ isEnter }) =>
                  `flex w-full p-4 text-left bg-slate-900 hover:bg-slate-800`,
              }}
              contentProps={{
                className:
                  "transition-height duration-200 ease-in-out bg-slate-900 mt-1",
              }}
              panelProps={{ className: "p-4 " }}
              key={id}
              header={({ state: { isEnter } }) => (
                <>
                  {item.header}
                  <AiOutlinePlus
                    className={`w-6 h-6 sm:w-10 sm:h-10 ml-auto transition duration-100 ${
                      isEnter ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </>
              )}
            >
              {item.content}
            </AccordionItem>
          );
        })}
      </Accordion>
      <EmailForm />
    </div>
  );
};
export default FaqSection;
