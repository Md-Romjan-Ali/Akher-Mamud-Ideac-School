import { Accordion, AccordionItem } from "@heroui/react";
import { BiChevronDown } from "react-icons/bi";

const faqs = [
    {
        key: "1",
        question: "আমি কীভাবে ভর্তি আবেদন করতে পারি?",
        answer:
            "ভর্তির সর্বশেষ তথ্য, আবেদন প্রক্রিয়া এবং প্রয়োজনীয় কাগজপত্র সম্পর্কে জানতে আপনি স্কুল অফিসে সরাসরি যোগাযোগ করতে পারেন অথবা এই ওয়েবসাইটের ভর্তি (Admission) বিভাগ ব্যবহার করতে পারেন।",
    },
    {
        key: "2",
        question: "স্কুলে কোন কোন শ্রেণিতে পাঠদান করা হয়?",
        answer:
            "আমাদের স্কুলে প্রাথমিক ও মাধ্যমিক স্তরে মানসম্মত শিক্ষা প্রদান করা হয়। পাশাপাশি শিক্ষার্থীদের একাডেমিক উৎকর্ষ, শৃঙ্খলা এবং নৈতিক চরিত্র গঠনে বিশেষ গুরুত্ব দেওয়া হয়।",
    },
    {
        key: "3",
        question: "স্কুলে শিক্ষার্থীদের জন্য কী কী সুবিধা রয়েছে?",
        answer:
            "হ্যাঁ, শিক্ষার্থীদের জন্য একটি সহায়ক ও আনন্দদায়ক শিক্ষার পরিবেশ নিশ্চিত করতে আমাদের রয়েছে আধুনিক শ্রেণিকক্ষ, প্রয়োজনীয় শিক্ষা উপকরণ এবং শিক্ষার্থীকেন্দ্রিক বিভিন্ন সুযোগ-সুবিধা।",
    },
    {
        key: "4",
        question: "অভিভাবকরা কীভাবে স্কুলের বিভিন্ন কার্যক্রম সম্পর্কে নিয়মিত আপডেট জানতে পারবেন?",
        answer:
            "অভিভাবকরা আমাদের যোগাযোগের মাধ্যমের সঙ্গে যুক্ত থেকে এবং স্কুলের ওয়েবসাইট ও অফিসিয়াল বিজ্ঞপ্তিতে প্রকাশিত সর্বশেষ তথ্য অনুসরণ করে স্কুলের সকল কার্যক্রম সম্পর্কে নিয়মিত আপডেট জানতে পারবেন।",
    },
];

export default function FAQSection() {
    return (
        <section id="faq" className="w-full bg-white py-20">
            <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                        FAQ
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-800 sm:text-4xl">
                        সাধারণ জিজ্ঞাসা
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        ভর্তি প্রক্রিয়া ও স্কুলজীবন সম্পর্কে পরিবারগুলোর সবচেয়ে সাধারণ কিছু প্রশ্নের উত্তর এখানে দেওয়া হয়েছে।
                    </p>
                </div>

                <Accordion className="w-full my-10">
                    {faqs.map((item, index) => (
                        <Accordion.Item key={index}>
                            <Accordion.Heading>
                                <Accordion.Trigger className="text-xl">
                                    {item.question}
                                    <Accordion.Indicator>
                                        <BiChevronDown />
                                    </Accordion.Indicator>
                                </Accordion.Trigger>
                            </Accordion.Heading>
                            <Accordion.Panel>
                                <Accordion.Body className="text-lg">{item.answer}</Accordion.Body>
                            </Accordion.Panel>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
