import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  const startIx = (pageNumber - 1) * pageSize;

  return _(items)
    .slice(startIx)
    .take(pageSize)
    .value();
}
