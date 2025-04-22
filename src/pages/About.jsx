import React from "react";

const About = () => {
  const TeamData = [
    {
      imageUrl:
        "https://www.shutterstock.com/image-photo/portrait-confident-young-indian-businesswoman-260nw-664120327.jpg",
      position: "CEO",
      name: "XYZ",
    },
    {
      imageUrl:
        "https://www.shutterstock.com/image-photo/portrait-confident-young-indian-businesswoman-260nw-664120327.jpg",
      position: "CEO",
      name: "XYZ",
    },
    {
      imageUrl:
        "https://www.shutterstock.com/image-photo/portrait-confident-young-indian-businesswoman-260nw-664120327.jpg",
      position: "CEO",
      name: "XYZ",
    },
    {
      imageUrl:
        "https://www.shutterstock.com/image-photo/portrait-confident-young-indian-businesswoman-260nw-664120327.jpg",
      position: "CEO",
      name: "XYZ",
    },
  ];
  return (
    <section className="bg-[#F5EDE3]">
      <h1
        className="text-center xl:text-[30px] sm:text-[20px
      ]   font-bold "
      >
        About us
      </h1>

      <div className=" md:flex  justify-between m-4 ">
        <div className="  ">
          <h1 className=" font-semibold  text-[25px] sm:text-[28px] md:text-[30px] xl:text-[35px] text-center ">
            Founder
          </h1>
          <p className="p-2 xl:w-[90%]">
            Founder Iqra Farid Meet Iqra Farid, the visionary founder and lead
            artist of Hatheli. Renowned for her exceptional skill and artistic
            intuition, Iqra has transformed the traditional art of mehndi into a
            powerful tool for storytelling and empowerment. Iqra's journey began
            with a deep passion for mehndi and a vision to uplift and empower
            women through this beautiful art form. Her dedication and creativity
            quickly set her apart, leading her to establish Hatheli as a
            platform for aspiring mehndi artists to thrive, featuring a variety
            of stunning designs for mehendi. Beyond her role as an artist, Iqra
            is a mentor and educator, committed to nurturing the next generation
            of mehndi artists. Through comprehensive workshops and online
            platforms, she shares her expertise, inspiring others to explore
            their creativity and achieve financial independence while mastering
            beautiful mehndi design and bridal mehndi design. Today, Hatheli has
            grown into a supportive and inclusive community that spans across
            Pakistan, empowering women and elevating the art of mehndi to new
            heights. Join Iqra on this inspiring journey and discover the
            transformative power of mehndi artistry!
          </p>
        </div>
        <img
          src="https://www.shutterstock.com/image-photo/portrait-successful-business-woman-suit-260nw-2468636115.jpg"
          alt=""
        />
      </div>
      <div className="md:flex  items-center  mt-[5vh]   ">
        <img
          src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/12/blog-cover-22-8.png"
          alt=""
          srcset=""
        />
        <main className=" p-5 ">
          <h1 className="text-[25px] font-semibold text-center">
            Welcome to Jaipuria Arts – Where Tradition Meets Creativity
          </h1>
          <p className="mt-3 p-2">
            life through every delicate pattern. Founded with a passion for
            {`At Jaipuria Arts, we believe that art is not just something you see
            – it's something you feel. Specializing in intricate and elegant
            Mehndi (Henna) designs, our goal is to bring timeless tradition to
            cultural expression and artistic excellence, Jaipuria Arts
            celebrates the rich heritage of Rajasthani and Indian Mehndi
            artistry. Whether it's for weddings, festivals, or special
            occasions, our designs are crafted to make your moments
            unforgettable.`}
          </p>
        </main>
      </div>
      <div className="flex  md:flex-row flex-col-reverse items-center justify-between    ">
        <main className=" p-5   md:w-[50%]">
          <h1 className="text-[25px] font-semibold text-center">
            What We Offer:
          </h1>
          <ul className="mt-3 p-2 list-dics">
            <li>
              <span className="font-semibold">Bridal Mehndi Designs-</span>
              Custom and luxurious patterns for your big day.
            </li>
            <li>
              <span className="font-semibold">
                Traditional & Arabic Mehndi -{" "}
              </span>
              A perfect blend of classic and modern styles.
            </li>
            <li>
              <span className="font-semibold">Festival & Party Mehndi –</span>
              Quick, elegant, and festive.
            </li>
            <li>
              <span className="font-semibold">Custom Artwork : </span>
              Tailored designs that reflect your unique personality and story.
            </li>
          </ul>{" "}
          <br />
          <p>
            Every stroke of our mehndi is drawn with precision, passion, and a
            deep respect for the traditions that inspire us. Using only natural
            and skin-safe henna, we ensure not only stunning results but also a
            safe and soothing experience.
          </p>
        </main>
        <img
          src="https://ramkumarmehandi.com/wp-content/uploads/2022/08/bridesmaid-finger-mehndi-for-brides.jpg"
          alt=""
          className="  "
          srcset=""
        />
      </div>
      <div className="xl:flex  w-[100%] items-center   justify-center   ">
        <main className=" p-5 w-full ">
          <h1 className="text-[25px] font-semibold text-center">
            Meet Our team{" "}
          </h1>
          <div className="flex  justify-around  mt-[5vh]">
            {TeamData.map((data, i) => (
              <div
                key={i}
                className="flex flex-col justify-center items-center"
              >
                <img
                  src={data.imageUrl}
                  alt=""
                  className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full"
                />
                <label htmlFor="name" className="font-semibold text-red-500">
                  {data.name}
                </label>
                <p className="font-semibold">{data.position}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
    
  );
};

export default About;
