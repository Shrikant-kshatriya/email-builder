import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Welcome to RapidQuest
        </h1>
        <p className="text-lg lg:text-xl mb-6">
          Quickly and easily create beautiful email templates with our powerful and user-friendly builder.
        </p>
        <a
          href="/selectTemplate"
          className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose RapidQuest?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Easy to Use</h3>
              <p>Create templates with a simple drag-and-drop interface.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Customizable</h3>
              <p>Personalize templates to match your brand.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p>Ensure your emails look great on all devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-green-500 to-teal-600 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Create Stunning Email Templates?
        </h2>
        <a
          href="/selectTemplate"
          className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          Start Building
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6 text-center">
        <p>© 2025 RapidQuest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
