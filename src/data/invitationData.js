// ============================================================================
// invitationData.js
// This is the SINGLE SOURCE OF TRUTH for all textual/media content on the
// invitation site. No component should hardcode couple names, dates, venue
// details, or contact info — everything is read from this object.
// To reuse this template for a different couple, just edit the values below.
// ============================================================================

export const invitationConfig = {
  couple: {
    bride: {
      name: "Pallavi",
      fullName: "Pallavi Kohli",
      father: "Late Mr. Raj Kumar Kohli",
      mother: "Mrs. Vikay Kohli",
    },
    groom: {
      name: "Rohit",
      fullName: "Rohit Jain",
      father: "Mr. Vikram Jain",
      mother: "Mrs. Rita Jain",
    },

  },

  couple: {
    bride: {
      name: "Pallavi",
      fullName: "Pallavi Kohli",
      family: [
        {
          relation: "Father",
          name: "Late Mr. Raj Kumar Kohli",
        },
        {
          relation: "Mother",
          name: "Mrs. Vikay Kohli",
        },
        {
          relation: "Brother",
          name: "Gaurav Kohli",
        },
        {
          relation: "Bhabhi",
          name: "Mrs. Deeksha Yadav Kohli",
        },
        {
          relation: "Jiju",
          name: "Pankaj Kumar",
        },
        {
          relation: "Masi",
          name: "Veena Sachdeva",
        },
        {
          relation: "Cousin",
          name: "Deepti Vohra",
        },

        {
          relation: "Cousin",
          name: "Reatesh Sachdeva",
        },
        {
          relation: "Cousin",
          name: "Reatesh Sachdeva",
        },
      ],
    },

    groom: {
      name: "Rohit",
      fullName: "Rohit Jain",
      family: [
        {
          relation: "Father",
          name: "Mr. Roshanlal Jain",
        },
        {
          relation: "Mother",
          name: "Mrs. Rita Jain",
        },
        {
          relation: "Brother",
          name: "Mrs. Rahul Jain",
        },
        {
          relation: "Bhabhi",
          name: "Mrs. Anushka Jain",
        },
        {
          relation: "Uncle",
          name: "Mrs. Prabhat Dugar",
        },
        {
          relation: "Masi",
          name: "Mrs. Nita Dugar",
        },
      ],
    },
    coupleHashtag: "#RohitPallaviRokafied",
  },

  event: {
    title: "Roka Ceremony",
    subtitle: "Two Families, One Beautiful Beginning",
    date: "2026-08-09",
    timings: "7:00 PM Onwards",
    schedule: [
      {
        time: "07:00 PM",
        title: "Guest Arrival & Welcome Refreshments",
        description: "Join us for welcome drinks and light refreshments as we gather to celebrate."
      },
      {
        time: "08:00 PM",
        title: "The Roka Ritual & Tilak",
        description: "Witness the auspicious Roka ceremony, followed by the exchange of blessings and the Tilak ritual.",
      },
      {
        time: "09:30 PM",
        title: "Dinner & Celebration",
        description: "Enjoy a delicious dinner followed by music, dancing, and joyful celebrations.",
      },
    ],
  },

  venue: {
    name: "Hotel Shree Mahaveer",
    address: "Rajendra Nagar Road, near Sheel Chauraha, Janakpuri, Bareilly, Uttar Pradesh 243122",
    googleMapsUrl: "https://www.google.com/maps/dir//Hotel+Shree+Mahaveer,+Rajendra+Nagar+Rd,+near+Sheel+Chauraha,+Janakpuri,+Bareilly,+Uttar+Pradesh+243122/@28.38949,79.413248,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x39a0071e695d360b:0x2970fcadb3dfe1e1!2m2!1d79.4268796!2d28.3843849?entry=ttu&g_ep=EgoyMDI2MDcyMS4wIKXMDSoASAFQAw%3D%3D",
    googleReviewsUrl: "https://www.google.com/travel/hotels/entity/CgoI4cP_ntuVv7gpEAE/overview?q=hotel%20mahaveer%20bareilly&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C121529350%2C121738283%2C121762713%2C121874359&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaSQorEicyJTB4MzlhMDA3MWU2OTVkMzYwYjoweDI5NzBmY2FkYjNkZmUxZTEaABIaEhQKBwjqDxAIGAESBwjqDxAIGAIYATICEAAqBAoAGgA&rp=EOHD_57blb-4KRDhw_-e25W_uClIAcABAg&ap=ugEHcmV2aWV3cw&ictx=111&utm_campaign=sharing&utm_medium=link&utm_source=htls",
  },

  rsvp: {
    contactName: "Gaurav Kohli (Bride's Brother)",
    contactPhone: "+917302842211",
    rsvpMessage: "Kindly confirm your presence by 1st of August 2026.",
  },
};

export default invitationConfig;
