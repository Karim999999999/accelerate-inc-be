const createArticle = (title, author, body, categories, status) => ({
  title,
  author,
  body,
  categories,
  status,
});

const articles = [
  createArticle(
    'article one',
    '6241951597021a989b204ea9',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, congue at lectus eget, euismod iaculis ex. Aliquam scelerisque tempus mauris, at ornare massa pretium id. Aliquam eget luctus felis. Nulla facilisi. Proin non eleifend dolor, ultrices consequat elit. In mollis scelerisque imperdiet. Morbi auctor tincidunt lorem a pretium. Nulla ultrices risus at pharetra sodales. Donec et porttitor purus, eu blandit erat. Curabitur mollis dui odio, in aliquet ante laoreet nec. Vestibulum blandit rhoncus imperdiet. Vestibulum sit amet urna quis nisi molestie sodales.',
    ['sport', 'training'],
    'published'
  ),
  createArticle(
    'article two',
    '62419f217785e878f68c8814',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, congue at lectus eget,euismod iaculis ex. Aliquam scelerisque tempus mauris, at ornare massa pretium id. Aliquam eget luctus felis. Nulla facilisi. Proin non eleifend dolor, ultrices consequat elit. In mollis scelerisque imperdiet. Morbi auctor tincidunt lorem a pretium. Nulla ultrices risus at pharetra sodales. Donec et porttitor purus, eu blandit erat. Curabitur mollis dui odio, in aliquet ante laoreet nec. Vestibulum blandit rhoncus imperdiet. Vestibulum sit amet urna quis nisi molestie sodales.',
    ['sport', 'training'],
    'draft'
  ),
  createArticle(
    'article three',
    '6241b5497785e878f68c881b',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, congue at lectus eget, euismod iaculis ex. Aliquam scelerisque tempus mauris, at ornare massa pretium id. Aliquam eget luctus felis. Nulla facilisi. Proin non eleifend dolor, ultrices consequat elit. In mollis scelerisque imperdiet. Morbi auctor tincidunt lorem a pretium. Nulla ultrices risus at pharetra sodales. Donec et porttitor purus, eu blandit erat. Curabitur mollis dui odio, in aliquet ante laoreet nec. Vestibulum blandit rhoncus imperdiet. Vestibulum sit amet urna quis nisi molestie sodales.',
    ['sport', 'training'],
    'published'
  ),
  createArticle(
    'article four',
    '6241b5be7785e878f68c8827',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, congue at lectus eget, euismod iaculis ex. Aliquam scelerisque tempus mauris, at ornare massa pretium id. Aliquam eget luctus felis. Nulla facilisi. Proin non eleifend dolor, ultrices consequat elit. In mollis scelerisque imperdiet. Morbi auctor tincidunt lorem a pretium. Nulla ultrices risus at pharetra sodales. Donec et porttitor purus, eu blandit erat. Curabitur mollis dui odio, in aliquet ante laoreet nec. Vestibulum blandit rhoncus imperdiet. Vestibulum sit amet urna quis nisi molestie sodales.',
    ['sport', 'training'],
    'draft'
  ),
  createArticle(
    'article five',
    '6241b5f37785e878f68c882d',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, congue at lectus eget, euismod iaculis ex. Aliquam scelerisque tempus mauris, at ornare massa pretium id. Aliquam eget luctus felis. Nulla facilisi. Proin non eleifend dolor, ultrices consequat elit. In mollis scelerisque imperdiet. Morbi auctor tincidunt lorem a pretium. Nulla ultrices risus at pharetra sodales. Donec et porttitor purus, eu blandit erat. Curabitur mollis dui odio, in aliquet ante laoreet nec. Vestibulum blandit rhoncus imperdiet. Vestibulum sit amet urna quis nisi molestie sodales.',
    ['sport', 'training'],
    'draft'
  ),
  createArticle(
    'article six',
    '6241b58c7785e878f68c8821',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, congue at lectus eget, euismod iaculis ex. Aliquam scelerisque tempus mauris, at ornare massa pretium id. Aliquam eget luctus felis. Nulla facilisi. Proin non eleifend dolor, ultrices consequat elit. In mollis scelerisque imperdiet. Morbi auctor tincidunt lorem a pretium. Nulla ultrices risus at pharetra sodales. Donec et porttitor purus, eu blandit erat. Curabitur mollis dui odio, in aliquet ante laoreet nec. Vestibulum blandit rhoncus imperdiet. Vestibulum sit amet urna quis nisi molestie sodales.',
    ['sport'],
    'draft'
  ),
  createArticle(
    'article seven',
    '6241b6217785e878f68c8833',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, congue at lectus eget, euismod iaculis ex. Aliquam scelerisque tempus mauris, at ornare massa pretium id. Aliquam eget luctus felis. Nulla facilisi. Proin non eleifend dolor, ultrices consequat elit. In mollis scelerisque imperdiet. Morbi auctor tincidunt lorem a pretium. Nulla ultrices risus at pharetra sodales. Donec et porttitor purus, eu blandit erat. Curabitur mollis dui odio, in aliquet ante laoreet nec. Vestibulum blandit rhoncus imperdiet. Vestibulum sit amet urna quis nisi molestie sodales.',
    ['sport'],
    'published'
  ),
  createArticle(
    'article eight',
    '6241b6a07785e878f68c8839',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, congue at lectus eget, euismod iaculis ex. Aliquam scelerisque tempus mauris, at ornare massa pretium id. Aliquam eget luctus felis. Nulla facilisi. Proin non eleifend dolor, ultrices consequat elit. In mollis scelerisque imperdiet. Morbi auctor tincidunt lorem a pretium. Nulla ultrices risus at pharetra sodales. Donec et porttitor purus, eu blandit erat. Curabitur mollis dui odio, in aliquet ante laoreet nec. Vestibulum blandit rhoncus imperdiet. Vestibulum sit amet urna quis nisi molestie sodales.',
    ['sport'],
    'draft'
  ),
  createArticle(
    'article nine',
    '6241b6cb7785e878f68c883e',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, congue at lectus eget, euismod iaculis ex. Aliquam scelerisque tempus mauris, at ornare massa pretium id. Aliquam eget luctus felis. Nulla facilisi. Proin non eleifend dolor, ultrices consequat elit. In mollis scelerisque imperdiet. Morbi auctor tincidunt lorem a pretium. Nulla ultrices risus at pharetra sodales. Donec et porttitor purus, eu blandit erat. Curabitur mollis dui odio, in aliquet ante laoreet nec. Vestibulum blandit rhoncus imperdiet. Vestibulum sit amet urna quis nisi molestie sodales.',
    ['sport', 'training'],
    'draft'
  ),
];

export default articles;
