import Image from "next/image";

function About() {
  return (
    <>
      <div className="flex justify-center items-center text-white py-10">
        <div className="w-5/6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8 flex flex-col justify-center items-center">
              <h1 className="text-4xl mb-8 flex justify-center font-bold">
                About UnCooked
              </h1>
              <section className="mb-12">
                <p className="text-lg leading-relaxed">
                  At Uncooked - Lock In, our mission is to help individuals
                  combat phone addiction and reconnect with the world around
                  them. In today's digital age, it's easy to get lost in the
                  virtual world and miss out on real-life experiences. Our app
                  encourages users to disconnect digitally and embrace offline
                  activities, promoting a healthier and more balanced lifestyle.
                </p>
              </section>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <Image
                src="/pic1.png"
                alt="Uncooked - Lock In"
                width={500}
                height={500}
                className=""
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse mt-12">
            <div className="md:w-1/2 md:pr-8 flex justify-center items-center">
              <section className="mb-12">
                <h1 className="text-4xl mb-8 flex justify-center font-bold">
                  App Features
                </h1>
                <p className="text-lg leading-relaxed">
                  Uncooked - Lock In offers a variety of features designed to
                  help you reduce your phone usage and make the most of your
                  offline time:
                </p>
                <ul className="list-disc list-inside text-lg leading-relaxed mt-4">
                  <li>
                    <strong>One-Click Disconnection:</strong> Disable all phone
                    apps with a single click.
                  </li>
                  <li>
                    <strong>Time Tracking:</strong> Monitor the duration of your
                    offline time and track your progress.
                  </li>
                  <li>
                    <strong>Leaderboards:</strong> Compete with friends and
                    other users to see who can maintain the longest streak of
                    offline time.
                  </li>
                  <li>
                    <strong>Social Sharing:</strong> Share your offline streaks
                    and achievements with your community to inspire others.
                  </li>
                  <li>
                    <strong>Notifications:</strong> Get reminders and
                    motivational messages to encourage you to stay offline.
                  </li>
                </ul>
              </section>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <Image
                src="/pic2.png"
                alt="Uncooked - Lock In"
                width={500}
                height={500}
                className="rounded-3xl"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-12">
            <div className="md:w-1/2 md:pr-8 flex justify-center items-center">
              <section className="mb-12">
                <h1 className="text-4xl mb-8 flex justify-center font-bold">
                  Track and Earn
                </h1>
                <p className="text-lg leading-relaxed">
                  At Uncooked - Lock In, we believe that staying offline should
                  be both rewarding and motivating. Our 'Track and Earn' feature
                  allows users to monitor their offline time and earn points for
                  every minute spent away from their screens. These points can
                  be redeemed for exciting rewards, such as discounts on
                  wellness products, access to exclusive content, and even
                  donations to charity on your behalf. By tracking your progress
                  and earning points, you'll not only improve your digital
                  wellness but also gain tangible benefits that enhance your
                  offline experiences. Stay motivated, stay offline, and start
                  earning today!
                </p>
              </section>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <Image
                src="/pic3.png"
                alt="Uncooked - Lock In"
                width={500}
                height={500}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
