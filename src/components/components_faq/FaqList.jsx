import React from 'react';
import SlideUpDown from "../../hooks/SlideUpDown";

const FaqList = ({searchQuestion}) => {

    const {slideUp, slideDown} = SlideUpDown()

    const handleOpen = (e) => {
        let faqItemQuestion = e.target.closest('.faq__item--question');
        if(faqItemQuestion) {

            const item = faqItemQuestion.closest('.faq__item'),
                answear = item.querySelector('.faq__item--answear');

            if (!item.classList.contains('_sliding')) {
                item.classList.add('_sliding')

                if (item.classList.contains('_active')) {
                    slideUp(answear, 500)
                    answear.style.display = "block";
                    item.classList.remove('_active');

                } else {
                    slideDown(answear, 500);
                    item.classList.add('_active');

                }

                setTimeout(() => {
                    item.classList.remove('_sliding')
                }, 500)

            }
        }
    }


    const listOfQuestions = [
        {
            id: 1,
            question: "Что такое карточные игры?",
            answer: `Ut a enim hendrerit, dignissim tellus vitae, porttitor purus. Ut laoreet odio ut ipsum accumsan, et varius diam pretium. Maecenas vitae ullamcorper magna, et vehicula mi. Sed nec risus mattis, condimentum nulla id, venenatis magna. Suspendisse in mollis arcu. Nulla viverra porttitor ligula quis vulputate. Ut a enim hendrerit, dignissim tellus vitae, porttitor purus. Ut laoreet odio ut ipsum accumsan, et varius diam pretium. Maecenas vitae ullamcorper magna, et vehicula mi. Sed nec risus mattis, condimentum nulla id, venenatis magna. Suspendisse in mollis arcu. Nulla viverra porttitor ligula quis vulputate.`
        },
        {
            id: 2,
            question: "Что такое карточные игры?",
            answer: `Ut a enim hendrerit, dignissim tellus vitae, porttitor purus. Ut laoreet odio ut ipsum accumsan, et varius diam pretium. Maecenas vitae ullamcorper magna, et vehicula mi. Sed nec risus mattis, condimentum nulla id, venenatis magna. Suspendisse in mollis arcu. Nulla viverra porttitor ligula quis vulputate. Ut a enim hendrerit, dignissim tellus vitae, porttitor purus. Ut laoreet odio ut ipsum accumsan, et varius diam pretium. Maecenas vitae ullamcorper magna, et vehicula mi. Sed nec risus mattis, condimentum nulla id, venenatis magna. Suspendisse in mollis arcu. Nulla viverra porttitor ligula quis vulputate.`
        },
    ]

    return (
        <ul className="faq__list">

            {
                listOfQuestions.filter(item => item.question.toLowerCase().includes(searchQuestion.toLowerCase())).map(item =>
                    <li key={item.id} className="faq__item" data-aos="fade-up" data-aos-delay="300">
                        <div className="faq__item--question" onClick={handleOpen}>
                            {item.id}. {item.question}
                        </div>
                        <div className="faq__item--answear">
                            {item.answer}
                        </div>
                    </li>
                )
            }

        </ul>
    );
};

export default FaqList;