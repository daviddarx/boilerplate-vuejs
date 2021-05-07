import * as items from '../content/items/items.json';
import * as itemsList from '../content/items/items/*.json';

const contents = {
  items: items,
  itemsList: itemsList
}

Object.values(contents).forEach(value => {
  delete value.default; //remove default set by parcel import
});

export default {
  items: contents.items,
  itemsList: Object.keys(contents.itemsList).map(objKey => contents.itemsList[objKey]).sort((e1, e2) =>
    new Date(e2.date) - new Date(e1.date)
  )
};
