import { defineSchema, TinaField } from "@tinacms/cli";
import * as Icons from "@heroicons/react/outline";

const overlayControls = [
  {
    label: "Image",
    name: "image",
    type: "string",
  },
  {
    label: "Text Color",
    name: "textColor",
    type: "string",
    options: ["light", "dark"],
  },
  {
    label: "Overlay Color",
    name: "overlayColor",
    type: "string",
    options: ["brand", "gray"],
  },
  {
    label: "Overlay Opacity",
    name: "overlayOpacity",
    type: "string",
    options: [
      { label: "10", value: "1" },
      { label: "20", value: "2" },
      { label: "30", value: "3" },
      { label: "40", value: "4" },
      { label: "50", value: "5" },
      { label: "60", value: "6" },
      { label: "70", value: "7" },
      { label: "80", value: "8" },
      { label: "90", value: "9" },
      { label: "100", value: "10" },
    ],
  },
];

const testimonial = {
  label: "Testimonial",
  name: "testimonial",
  type: "object",
  ui: {
    text: "Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.",
    author: {
      name: "Marcia Hill",
      avatar:
        "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
  },
  fields: [
    {
      label: "Quote",
      name: "quote",
      required: true,
      type: "string",
    },
    {
      type: "object",
      name: "author",
      label: "Author",
      fields: [
        {
          label: "Name",
          name: "name",
          required: true,
          type: "string",
        },
        {
          label: "Avatar",
          required: true,
          name: "avatar",
          type: "string",
        },
      ],
    },
  ],
};

const linkOptions = [
  { label: "Link", value: "link" },
  { label: "Tel", value: "tel" },
  { label: "Sign Up", value: "signUpLink" },
  { label: "Sign Up Personal", value: "signUpLinkPersonal" },
  { label: "Sign In", value: "signInLink" },
];

const action = {
  label: "Action",
  name: "action",
  type: "object",
  ui: {
    linkText: "Give us a call!",
    link: "tel",
  },
  fields: [
    {
      label: "Call to Action",
      name: "callToAction",
      type: "string",
    },
    {
      label: "Link Text",
      name: "linkText",
      required: true,
      type: "string",
    },
    {
      label: "Link",
      name: "link",
      required: true,
      type: "string",
      options: linkOptions,
    },
    {
      label: "Link Override",
      name: "linkOverride",
      // description: "Provide a raw value to link (can't be internationalized)",
      type: "string",
    },
    {
      label: "Secondary Text",
      name: "secondaryText",
      type: "string",
    },
    {
      label: "Secondary Link",
      name: "secondaryLink",
      type: "string",
      options: linkOptions,
    },
    {
      label: "Secondary Link Override",
      name: "secondaryLinkOverride",
      // description: "Provide a raw value to link (can't be internationalized)",
      type: "string",
    },
  ],
};

const textFields: TinaField[] = [
  {
    label: "Title",
    name: "title",
    type: "string" as const,
    required: true,
  },
  {
    label: "Sub-Title",
    name: "subTitle",
    type: "string",
  },
  {
    label: "Description",
    name: "description",
    type: "string" as const,
    required: true,
  },
];

const textFieldsSeo: TinaField[] = [
  {
    label: "Title",
    name: "title",
    type: "string" as const,
    // required: true,
  },
  {
    label: "Image",
    name: "image",
    type: "string",
  },
  {
    label: "Description",
    name: "description",
    type: "string" as const,
    required: true,
  },
];

const localeStrings = [
  {
    label: "Tel",
    name: "tel",
    type: "string",
  },
  {
    label: "Sign Up Link",
    name: "signUpLink",
    type: "string",
  },
  {
    label: "Sign Up Link Personal",
    name: "signUpLinkPersonal",
    type: "string",
  },
  {
    label: "Sign In Link",
    name: "signInLink",
    type: "string",
  },
];

export default defineSchema({
  collections: [
    {
      label: "Locale Information",
      name: "localeInfo",
      path: "content/localeInfo",
      fields: [
        {
          type: "object",
          label: "AU",
          name: "au",
          fields: localeStrings,
        },
        {
          type: "object",
          label: "US",
          name: "us",
          fields: localeStrings,
        },
        {
          type: "object",
          label: "GB",
          name: "gb",
          fields: localeStrings,
        },
      ],
    },
    {
      label: "News & Insights",
      name: "news",
      path: "content/news",
      fields: [
        ...textFields,
        {
          label: "Image",
          name: "image",
          type: "string",
        },
        {
          type: "string",
          name: "body",
          isBody: true,
          label: "Body",
        },
      ],
    },
    {
      label: "Footer",
      name: "footer",
      path: "content/footer",
      fields: [
        {
          label: "Offices",
          name: "offices",
          type: "object",
          list: true,
          ui: {
            defaultItem: {
              location: "London",
              address: "Some Address\nInLondon\nUnited Kingdom",
              phone: "+44 123 456",
            },
          },
          fields: [
            {
              label: "Location",
              name: "location",
              required: true,
              type: "string",
            },
            {
              label: "Address",
              name: "address",
              required: true,
              type: "string",
            },
            {
              label: "Phone",
              name: "phone",
              required: true,
              type: "string",
            },
          ],
        },
        {
          label: "Disclaimers",
          name: "disclaimers",
          required: true,
          type: "object",
          list: true,
          fields: [
            {
              label: "Body",
              name: "body",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      label: "Theme",
      name: "theme",
      path: "content/theme",
      format: "json",
      fields: [
        {
          label: "Display Font",
          name: "displayFont",
          type: "string",
          options: [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "Ardent",
            "Article",
            "Pulse",
            "OpenSans",
          ],
        },
        {
          label: "Color mode",
          name: "colorMode",
          type: "string",
          options: ["steel", "black", "indigo"],
        },
      ],
    },
    {
      label: "Navigation",
      name: "navigation",
      path: "content/navigation",
      fields: [
        {
          label: "Items",
          name: "items",
          required: true,
          type: "object",
          list: true,
          fields: [
            {
              label: "Page",
              name: "page",
              type: "reference",
              collections: ["page"],
            },
          ],
        },
      ],
    },
    {
      label: "Page",
      name: "page",
      path: "content/pages",
      fields: [
        {
          label: "Title",
          name: "title",
          required: true,
          type: "string",
        },
        {
          label: "Link",
          name: "link",
          required: true,
          type: "string",
        },
        {
          label: "SEO",
          name: "seo",
          type: "object",
          // required: true,
          fields: textFieldsSeo,
        },
        {
          label: "Blocks",
          name: "blocks",
          type: "object",
          list: true,
          templates: [
            {
              label: "News",
              name: "news",
              fields: [
                ...textFields,
                {
                  label: "Items",
                  name: "newsItems",
                  type: "object",
                  required: true,
                  list: true,
                  ui: {
                    defaultItem: {
                      article: "content/news/dollar-gains.md",
                    },
                  },
                  fields: [
                    {
                      label: "Article",
                      name: "article",
                      type: "reference",
                      required: true,
                      collections: ["news"],
                    },
                  ],
                },
              ],
              ui: {
                defaultItem: {
                  title: "Get in touch",
                  description:
                    "Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.",
                  newsItems: [
                    {
                      article: "content/news/dollar-gains.md",
                    },
                  ],
                },
              },
            },
            {
              label: "Stats With Image",
              name: "statsWithImage",
              fields: [
                ...textFields,
                {
                  label: "Image",
                  name: "image",
                  type: "string",
                },
                {
                  label: "Stats",
                  name: "stats",
                  type: "object",
                  required: true,
                  list: true,
                  ui: {
                    defaultItem: {
                      title: "8k",
                      description:
                        "Companies use laoreet amet lacus nibh integer quis.",
                    },
                  },
                  fields: textFields,
                },
              ],
              ui: {
                defaultItem: {
                  title: "Get in touch",
                  description:
                    "Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.",
                  image:
                    "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100",
                },
              },
            },

            {
              label: "Hero",
              name: "hero",
              fields: [
                ...textFields,
                {
                  label: "Style",
                  name: "style",
                  type: "string",
                  options: ["slanted", "withSignup"],
                },
                {
                  label: "Image",
                  name: "image",
                  type: "string",
                },
                action,
              ],
              ui: {
                defaultItem: {
                  title: "Let's put something down here...",
                  description: "And something here too",
                  image: "https://placehold.it/2000x1500",
                },
              },
            },
            {
              label: "Slideshow",
              name: "slideshow",
              fields: [
                {
                  label: "Items",
                  name: "items",
                  type: "object",
                  list: true,
                  ui: {
                    defaultItem: {
                      title: "What we do",
                      description:
                        "We work as your trusted business partner to help you more effectively operate your business globally. Ebury's global payment solutions enable you to efficiently and securely send payments across the world in over 140 currencies. Offering a sophisticated suite of products and an advanced technology platform, as well as a panel of the biggest, global banks to ensure the most competitive pricing in the industry.",
                      image:
                        "https://images.ctfassets.net/fn5fbjfhb3z0/1GQRbVRTQ9OJmignvZxPTd/43b7e889507f8801aa8268aef9d95083/opera-house-2.jpg?w=1600&h=1066&q=50",
                    },
                  },
                  fields: [
                    ...textFields,
                    {
                      label: "Image",
                      name: "image",
                      type: "string",
                    },
                    {
                      label: "Text Color",
                      name: "textColor",
                      type: "string",
                      options: ["light", "dark"],
                    },
                    action,
                    {
                      label: "Overlay Color",
                      name: "overlayColor",
                      type: "string",
                      options: ["brand", "gray"],
                    },
                    {
                      label: "Overlay Opacity",
                      name: "overlayOpacity",
                      type: "string",
                      options: [
                        { label: "10", value: "1" },
                        { label: "20", value: "2" },
                        { label: "30", value: "3" },
                        { label: "40", value: "4" },
                        { label: "50", value: "5" },
                        { label: "60", value: "6" },
                        { label: "70", value: "7" },
                        { label: "80", value: "8" },
                        { label: "90", value: "9" },
                        { label: "100", value: "10" },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: "Comparison Table",
              name: "comparisonTable",
              ui: {
                defaultItem: {
                  title: "The right price for you, whoever you are",
                  description:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi unde repudiandae natus.",
                },
              },
              fields: [
                ...textFields,
                {
                  label: "Items",
                  name: "items",
                  type: "object",
                  list: true,
                  fields: [
                    ...textFields,
                    {
                      label: "Bullet points",
                      name: "bulletPoints",
                      type: "string",
                      list: true,
                    },
                  ],
                },
                action,
              ],
            },
            {
              label: "Full Screen Logo",
              name: "fullScreenLogo",
              fields: [
                {
                  label: "Slogan",
                  name: "slogan",
                  type: "string",
                },
                {
                  label: "Link",
                  name: "link",
                  type: "string",
                },
                ...overlayControls,
              ],
              ui: {
                defaultItem: {
                  image:
                    "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100",
                },
              },
            },
            {
              label: "Full Screen Header",
              name: "fullScreenHeader",
              fields: [...textFields, action, ...overlayControls],
              ui: {
                defaultItem: {
                  title: "What we do",
                  description:
                    "Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.",
                  image:
                    "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100",
                },
              },
            },
            {
              label: "Feature List",
              name: "feature",
              ui: {
                defaultItem: {
                  title: "This is the default feature list title",
                  description: "And something here too",
                  featureStyle: "4-wide-grid",
                  // This doesn't work
                  features: [
                    {
                      icon: "HeartIcon",
                      name: "This is some dummy content",
                      description:
                        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
                    },
                  ],
                },
              },
              fields: [
                ...textFields,
                {
                  label: "Style",
                  name: "featureStyle",
                  type: "string",
                  options: ["4-wide-grid", "2-wide-grid", "3-column"],
                },
                {
                  label: "Features",
                  name: "features",
                  type: "object",
                  required: true,
                  list: true,
                  ui: {
                    defaultItem: {
                      icon: "HeartIcon",
                      name: "This is some dummy content",
                      description:
                        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
                    },
                  },
                  fields: [
                    {
                      label: "Icon",
                      name: "icon",
                      type: "string",
                      required: true,
                      options: Object.keys(Icons),
                    },
                    {
                      label: "Label",
                      name: "name",
                      required: true,
                      type: "string",
                    },
                    {
                      label: "Description",
                      name: "description",
                      required: true,
                      type: "string",
                    },
                  ],
                },
                ...overlayControls,
              ],
            },
            {
              label: "Screen Shot Feature",
              name: "screenShotFeature",
              fields: [
                ...textFields,
                {
                  label: "Image",
                  name: "image",
                  type: "string",
                },
                {
                  label: "Alignment",
                  name: "alignment",
                  type: "string",
                  options: ["left", "right"],
                },
                {
                  label: "Icon",
                  name: "icon",
                  type: "string",
                  options: Object.keys(Icons),
                },
                action,
                testimonial,
              ],
              ui: {
                defaultItem: {
                  title: "Stay on top of customer support",
                  description:
                    "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.",
                  image:
                    "https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg",
                },
              },
            },
          ],
        },
      ],
    },
  ],
});
