const templates = [
  {
    id: 1,
    name: "Standard Template",
    image: "/template1.png",
    template: [
      {
        id: "header",
        type: "text",
        content: "Your Heading",
        style: {
          color: "#000000",
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
        },
      },
      {
        id: "subheader",
        type: "text",
        content: "Your Sub Header",
        style: {
          color: "#000000",
          fontSize: "18px",
          fontWeight: "300",
          textAlign: "center",
        },
      },
      {
        id: "heroImage",
        type: "image",
        content: "/hero-wide.png",
        style: { width: "100%", height: "auto" },
      },
      {
        id: "paragraph1",
        type: "text",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est cum ex nemo praesentium eaque eius sint provident laudantium hic nam..",
        style: {
          color: "#000000",
          fontSize: "17px",
          fontWeight: "400",
          textAlign: "center",
        },
      },
      {
        id: "button",
        type: "button",
        content: "Dummy button",
        style: {
          backgroundColor: "#E9703E",
          color: "#FFFFFF",
          padding: "12px 24px",
          borderRadius: "4px",
          textDecoration: "none",
          width: "200px",
          margin: "0 auto",
          textAlign: "center",
        },
        href: "#",
      },
      {
        id: "paragraph2",
        type: "text",
        content: "Have a question? support@ourteam.com",
        style: {
          color: "#000000",
          fontSize: "17px",
          fontWeight: "400",
          textAlign: "center",
        },
      },
      {
        id: "footer",
        type: "text",
        content:
          "This email template was sent to you because we want to make the world a better place. You could change your subscription settings anytime.",
        style: {
          color: "#999999",
          fontSize: "13px",
          fontWeight: "400",
          textAlign: "center",
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Special Offer',
    image: "/template2.png",
    template: [
      {
        id: "header",
        type: "text",
        content: "Special Offer! Up to 50% off on all products",
        style: {
          color: "#000000",
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
        },
      },
      {
        id: "heroImage",
        type: "image",
        content: "/banner.png",
        style: { width: "100%", height: "auto" },
      },
      {
        id: "paragraph1",
        type: "text",
        content:
          "Don't miss out on our biggest sale of the year! Shop now and save up to 50% on all your favorite items. This offer is valid for a limited time only, so hurry and shop today!",
        style: {
          color: "#000000",
          fontSize: "17px",
          fontWeight: "400",
          textAlign: "center",
        },
      },
      {
        id: "button",
        type: "button",
        content: "Shop Now",
        style: {
          backgroundColor: "#E9708E",
          color: "#FFFFFF",
          padding: "12px 24px",
          borderRadius: "4px",
          textDecoration: "none",
          width: "200px",
          margin: "0 auto",
          textAlign: "center",
        },
        href: "#",
      },
      {
        id: "paragraph2",
        type: "text",
        content: "Here are some of our featured products:",
        style: {
          color: "#000000",
          fontSize: "17px",
          fontWeight: "400",
          textAlign: "center",
        },
      },
      {
        id: "footer",
        type: "text",
        content:
          "This email was sent to you because you subscribed to our newsletter. You can unsubscribe anytime by clicking here.",
        style: {
          color: "#999999",
          fontSize: "13px",
          fontWeight: "400",
          textAlign: "center",
        },
      },
    ],
  },
  {
    id: 3,
    name: "Modern Gradient Welcome",
    image: "/template3.png",
    template: [
      {
        id: "logo",
        type: "image",
        content: "/logo.png",
        style: {
          width: "120px",
          height: "auto",
          margin: "0 auto",
          display: "block"
        }
      },
      {
        id: "welcomeHeader",
        type: "text",
        content: "Welcome to the Future",
        style: {
          color: "#2D3748",
          fontSize: "32px",
          fontWeight: "800",
          textAlign: "center",
          fontFamily: "'Helvetica Neue', sans-serif",
          letterSpacing: "-1px",
          marginTop: "30px"
        }
      },
      {
        id: "gradientDivider",
        type: "divider",
        style: {
          height: "4px",
          width: "120px",
          margin: "24px auto",
          background: "linear-gradient(90deg, #6366F1 0%, #A855F7 100%)",
          borderRadius: "2px"
        }
      },
      {
        id: "heroImage",
        type: "image",
        content: "/hero-wide.png",
        style: {
          width: "100%",
          height: "auto",
          borderRadius: "12px"
        }
      },
      {
        id: "mainText",
        type: "text",
        content: "We're thrilled to have you join our community of innovators and creators. Get ready to embark on an exciting journey with us.",
        style: {
          color: "#4A5568",
          fontSize: "18px",
          lineHeight: "1.6",
          fontWeight: "400",
          textAlign: "center",
          margin: "24px 0"
        }
      },
      {
        id: "getStartedButton",
        type: "button",
        content: "Get Started →",
        style: {
          backgroundColor: "#6366F1",
          color: "#FFFFFF",
          padding: "16px 32px",
          width: "200px",
          borderRadius: "8px",
          textDecoration: "none",
          textAlign: "center",
          fontWeight: "600",
          fontSize: "16px",
          margin: "0 auto",
          boxShadow: "0 4px 6px rgba(99, 102, 241, 0.25)"
        },
        href: "#"
      }
    ]
  },
  {
    id: 4,
    name: "Minimalist Product Launch",
    image: "/template4.png",
    template: [
      {
        id: "announcementLabel",
        type: "text",
        content: "NEW RELEASE",
        style: {
          color: "#6366F1",
          fontSize: "14px",
          fontWeight: "700",
          textAlign: "center",
          letterSpacing: "2px",
          textTransform: "uppercase"
        }
      },
      {
        id: "productName",
        type: "text",
        content: "Introducing Aurora Pro",
        style: {
          color: "#1A202C",
          fontSize: "36px",
          fontWeight: "800",
          textAlign: "center",
          marginTop: "16px",
          fontFamily: "'Helvetica Neue', sans-serif"
        }
      },
      {
        id: "productImage",
        type: "image",
        content: "/banner.png",
        style: {
          width: "100%",
          height: "auto",
          margin: "32px 0",
          borderRadius: "16px",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
        }
      },
      {
        id: "productDescription",
        type: "text",
        content: "Experience the next generation of design tools. Aurora Pro brings unprecedented power and simplicity to your creative workflow.",
        style: {
          color: "#4A5568",
          fontSize: "18px",
          lineHeight: "1.8",
          fontWeight: "400",
          textAlign: "center",
          margin: "24px 0"
        }
      },
      {
        id: "priceTag",
        type: "text",
        content: "Starting at $49/month",
        style: {
          color: "#2D3748",
          fontSize: "24px",
          fontWeight: "700",
          textAlign: "center",
          margin: "16px 0"
        }
      },
      {
        id: "launchButton",
        type: "button",
        content: "Pre-order Now",
        style: {
          backgroundColor: "#000000",
          color: "#FFFFFF",
          padding: "18px 36px",
          borderRadius: "99px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "16px",
          margin: "24px auto",
          display: "inline-block",
          letterSpacing: "0.5px"
        },
        href: "#"
      }
    ]
  },
  {
    id: 5,
    name: "Special Promotion",
    image: "/template5.png",
    template: [
      {
        id: "promoHeader",
        type: "text",
        content: "48 HOURS ONLY",
        style: {
          color: "#EF4444",
          fontSize: "24px",
          fontWeight: "800",
          textAlign: "center",
          letterSpacing: "4px"
        }
      },
      {
        id: "promoTitle",
        type: "text",
        content: "Summer Flash Sale",
        style: {
          color: "#1A202C",
          fontSize: "48px",
          fontWeight: "900",
          textAlign: "center",
          margin: "16px 0",
          fontFamily: "'Helvetica Neue', sans-serif",
          textTransform: "uppercase",
          letterSpacing: "-1px"
        }
      },
      {
        id: "discount",
        type: "text",
        content: "50% OFF",
        style: {
          color: "#EF4444",
          fontSize: "64px",
          fontWeight: "900",
          textAlign: "center",
          margin: "24px 0",
          letterSpacing: "-2px"
        }
      },
      {
        id: "promoImage",
        type: "image",
        content: "/hero-wide.png",
        style: {
          width: "100%",
          height: "auto",
          borderRadius: "24px",
          margin: "32px 0"
        }
      },
      {
        id: "timer",
        type: "text",
        content: "Ends in: 47:59:59",
        style: {
          color: "#2D3748",
          fontSize: "20px",
          fontWeight: "600",
          textAlign: "center",
          margin: "24px 0",
          fontFamily: "monospace"
        }
      },
      {
        id: "shopButton",
        type: "button",
        content: "SHOP NOW",
        style: {
          backgroundColor: "#EF4444",
          color: "#FFFFFF",
          padding: "20px 40px",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "700",
          fontSize: "18px",
          margin: "0 auto",
          display: "inline-block",
          letterSpacing: "2px",
          boxShadow: "0 4px 6px rgba(239, 68, 68, 0.25)"
        },
        href: "#"
      },
      {
        id: "terms",
        type: "text",
        content: "*Terms and conditions apply. Valid only on selected items.",
        style: {
          color: "#718096",
          fontSize: "12px",
          fontWeight: "400",
          textAlign: "center",
          margin: "24px 0"
        }
      }
    ]
  },
  {
    id: 6,
    name: "Modern Newsletter",
    image: "/template6.png",
    template: [
      {
        id: "date",
        type: "text",
        content: "January 2025",
        style: {
          color: "#6B7280",
          fontSize: "14px",
          fontWeight: "500",
          textAlign: "center",
          letterSpacing: "2px",
          textTransform: "uppercase"
        }
      },
      {
        id: "newsletterTitle",
        type: "text",
        content: "Design & Innovation Digest",
        style: {
          color: "#111827",
          fontSize: "32px",
          fontWeight: "800",
          textAlign: "center",
          marginTop: "16px",
          fontFamily: "'Helvetica Neue', sans-serif",
          letterSpacing: "-0.5px"
        }
      },
      {
        id: "featuredImage",
        type: "image",
        content: "/hero-wide.png",
        style: {
          width: "100%",
          height: "auto",
          borderRadius: "20px",
          margin: "32px 0"
        }
      },
      {
        id: "articleTitle",
        type: "text",
        content: "The Future of AI in Design",
        style: {
          color: "#111827",
          fontSize: "24px",
          fontWeight: "700",
          textAlign: "left",
          margin: "24px 0 16px 0"
        }
      },
      {
        id: "articleExcerpt",
        type: "text",
        content: "Discover how artificial intelligence is revolutionizing the design industry and what it means for creators worldwide. Read our in-depth analysis and expert insights.",
        style: {
          color: "#4B5563",
          fontSize: "16px",
          lineHeight: "1.8",
          fontWeight: "400",
          textAlign: "left",
          margin: "0 0 24px 0"
        }
      },
      {
        id: "readMoreButton",
        type: "button",
        content: "Read Full Article",
        style: {
          backgroundColor: "#18181B",
          color: "#FFFFFF",
          padding: "14px 28px",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "500",
          fontSize: "15px",
          margin: "0",
          display: "inline-block"
        },
        href: "#"
      },
      {
        id: "divider",
        type: "divider",
        style: {
          height: "1px",
          width: "100%",
          margin: "20px 0",
          backgroundColor: "#E5E7EB"
        }
      },
      {
        id: "footer",
        type: "text",
        content: "You're receiving this email because you subscribed to our newsletter. You can unsubscribe at any time.",
        style: {
          color: "#9CA3AF",
          fontSize: "13px",
          fontWeight: "400",
          textAlign: "center",
          margin: "12px 0"
        }
      }
    ]
  }
];

module.exports = templates;
