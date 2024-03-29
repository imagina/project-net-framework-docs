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
 /* tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  VueJsSidebar: [{type: 'autogenerated', dirName: '.'}],
  LaravelSidebar: [{type: 'autogenerated', dirName: '.'}],*/

  // But you can create a sidebar manually
  
  NETSidebar: [
    {
      type: 'category',
      label: 'Tutorials',
      items: ['NET/tutorials/intro',
      'NET/tutorials/editingconnection',
      'NET/tutorials/migrations',
      'NET/tutorials/frontquasar'],
    },
    {
      type: 'category',
      label: 'Installation',
      items: ['NET/installation/prerequisites',
      'NET/installation/installinginaproject',],
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['NET/guides/crud'],
    },
    {
      type: 'category',
      label: 'Diagrams',
      items: ['NET/diagrams/entity-relation'],
    },
    {
      type: 'category',
      label: 'Modules',
      items: [{type: 'autogenerated', dirName: 'NET/modules'}],
    },
    {
      type: 'category',
      label: 'Testing',
      items: [{type: 'autogenerated', dirName: 'NET/testing'}],
    },    
    {
      type: 'category',
      label: 'Wiki',
      items: ['NET/wiki/glossary',
      'NET/wiki/goodpractices'],
    },
  ],

  VueJsSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document','tutorial-basics/create-a-page'],
    },
  ],

  LaravelSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document','tutorial-basics/create-a-page'],
    },
  ],
};

module.exports = sidebars;
