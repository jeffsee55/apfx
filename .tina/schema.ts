// @ts-nocheck FIXME
import { defineSchema, defineConfig } from "tinacms";
import type { TinaField } from "tinacms";
import * as Icons from "@heroicons/react/outline";
import { heroTemplate } from "../components/blocks/hero.tsx";
import { newsTemplate } from "../components/blocks/news";
import { statsWithImageTemplate } from "../components/blocks/stats";
import { pageBlocksComparisonTableTemplate } from "../components/blocks/pricing";
import { slideshowTemplate } from "../components/blocks/slideshow";
import {
  featureTemplate,
  screenshotFeatureTemplate,
} from "../components/blocks/feature";

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
  fields: [
    {
      label: "Call to Action",
      name: "callToAction",
      type: "string",
    },
    {
      label: "Link Text",
      name: "linkText",
      // required: true,
      type: "string",
    },
    {
      label: "Link",
      name: "link",
      // required: true,
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
    // @ts-ignore
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
    type: "rich-text" as const,
    // @ts-ignore
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

const localeStrings: TinaField[] = [
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
        ...textFields.filter((textField) => textField.name !== "description"),
        {
          label: "Image",
          name: "image",
          type: "string",
        },
        {
          type: "rich-text",
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
          // @ts-ignore
          required: true,
          type: "object",
          list: true,
          fields: [
            {
              label: "Body",
              name: "body",
              type: "rich-text",
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
          // @ts-ignore
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
            newsTemplate(textFields),
            statsWithImageTemplate(textFields),
            heroTemplate(textFields, action),
            slideshowTemplate(textFields, action),
            pageBlocksComparisonTableTemplate(textFields, action),
            featureTemplate(textFields, overlayControls),
            screenshotFeatureTemplate(textFields, action, testimonial),
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
          ],
        },
      ],
    },
  ],
});

const branch = process.env.VERCEL_GIT_COMMIT_REF || "main";
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/d94095b9-fb25-40a6-a3ea-277ad5653cb0/github/${branch}`;

export const tinaConfig = defineConfig({
  apiURL,
  cmsCallback: (cms) => {
    cms.flags.set("branch-switcher", true);
    cms.flags.set("use-unstable-formify", true);
    return cms;
  },
  formifyCallback: ({ formConfig, createForm, createGlobalForm }) => {
    if (
      [
        "content/navigation/main.md",
        "content/localeInfo/main.md",
        "content/footer/main.md",
        "content/theme/main.json",
      ].includes(formConfig.id)
    ) {
      return createGlobalForm(formConfig);
    }
    return createForm(formConfig);
  },
});
