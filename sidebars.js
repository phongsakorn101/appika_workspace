/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

// module.exports = sidebars;

module.exports = {
  tutorialSidebar: [
    "hello",
    {
      type: "category",
      label: "Tutorial Home",
      items: [
        "tutorial-home/create-a-space",
        "tutorial-home/create-a-task",
        "tutorial-home/search-home",
        "tutorial-home/space-see-all",
        "tutorial-home/today-see-all",
        "tutorial-home/overdue-see-all",
        "tutorial-home/unscheduled-see-all",
        "tutorial-home/create-see-all",
      ],
    },
  ],
};
