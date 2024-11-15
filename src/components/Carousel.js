import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Carousel.css"; // Basic styling for the carousel

const testimonials = [
  {
    quote: "It was a tough time when they started operation, considering restrictions on road entries, new customers, and high expectations of dealers, etc. It was one of the big challenges for them. But the team of AAJ Enterprises has been focused on their duties since the 1st day.",
    name: "Jaspreet Singh",
    position: "Senior Manager",
    company: "Tynor Orthotics Pvt. Ltd.",
    companyLogo: "/images/companylogo/img1.png", // Path to company logo in public/images
    profileImage: "/images/profileimage/img1.png", // Path to profile image in public/images
  },
  {
    quote: "AAJ and their employees were very attentive to our needs even during times of minimal notice. For protection of our sales during the relocation, we set up a parallel shipping operation with AAJ, and the agreed upon project timelines were met both from operations and systems standpoint. In the future, we won't hesitate to avail services of AAJ if required.",
    name: "Glenn Cipriani",
    position: "VP Distribution",
    company: "Pearson India Education Services Pvt. Ltd.",
    companyLogo: "/images/companylogo/img2.png", // Path to company logo in public/images
    profileImage: "/images/profileimage/img2.png", // Path to profile image in public/images
  },
  {
    quote: "We have processed more than 1 million units from the AAJ warehouse since February 2022. We just started operations with AAJ in November 2021, and this was our 4th month of operations. What makes it even more satisfying is the budgeted outward units for February 2022 was close to 800,000, and our TAT achievement was 97.34% against the budgeted 95%.",
    name: "Samantha Roy",
    position: "Director of Operations",
    company: "Techno Labs Inc.",
    companyLogo: "/images/companylogo/img3.png", // Path to company logo in public/images
    profileImage: "/images/profileimage/img3.png", // Path to profile image in public/images
  },
];


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Left and right arrows
  };

  return (
    <div className="testimonial-carousel">
      <h2>Client Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div className="testimonial-profile">
              <img src={testimonial.profileImage} alt={`${testimonial.name}`} className="profile-image" />
              <div>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-position">{testimonial.position}</p>
              </div>
            </div>
            <div className="company-info">
              <img src={testimonial.companyLogo} alt={testimonial.company} className="company-logo" />
              <p className="company-name">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
