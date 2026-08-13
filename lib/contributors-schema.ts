/**
 * Contributors hub page JSON-LD.
 * Host verified: www → https://medicalmarijuanadoctoroklahoma.com/ (307).
 */
export function contributorsPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/contributors/#webpage",
        url: "https://medicalmarijuanadoctoroklahoma.com/contributors/",
        name: "Contributors | Medical Marijuana Doctor Oklahoma",
        description:
          "Meet the writer and physician reviewer behind the medical marijuana content on Medical Marijuana Doctor Oklahoma.",
        isPartOf: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#website",
        },
        mainEntity: {
          "@id":
            "https://medicalmarijuanadoctoroklahoma.com/contributors/#contributorlist",
        },
        breadcrumb: {
          "@id":
            "https://medicalmarijuanadoctoroklahoma.com/contributors/#breadcrumb",
        },
      },
      {
        "@type": "ItemList",
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/contributors/#contributorlist",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id":
                "https://medicalmarijuanadoctoroklahoma.com/contributors/robert-d-saint-laurent/#person",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id":
                "https://medicalmarijuanadoctoroklahoma.com/contributors/daalon-b-echols/#person",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/contributors/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://medicalmarijuanadoctoroklahoma.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contributors",
            item: "https://medicalmarijuanadoctoroklahoma.com/contributors/",
          },
        ],
      },
    ],
  };
}
