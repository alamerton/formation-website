import React from "react";

const Main: React.FC = () => {
  return (
    <section id="main" className="bg-gray-500 text-white pt-24 pb-20">
      {" "}
      {/* Changed pt-32 to pt-24 */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Formation</h2>
        <p className="text-xl mb-8">
          We are on a mission to minimise lock-in risks from AI systems
        </p>
        <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-bold">
          Theory of Change
        </button>
      </div>
    </section>
  );
};

export default Main;
