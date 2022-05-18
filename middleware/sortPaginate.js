const sortPaginate = model => async (req, res, next) => {
  let query;

  // Make a copy of req query in order to select only certain fields
  const reqQuery = { ...req.query };

  // Fields to esclude
  const fieldsToRemove = ['select', 'sort', 'page', 'limit'];

  // loop over fields to exclude and remove them from reqQuery
  fieldsToRemove.forEach(param => delete reqQuery[param]);

  // Create express friendly query strings, that will prepend a '$' to the operators
  const queryStr = JSON.stringify(reqQuery).replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    match => `$${match}`
  );

  // Finding resource
  query = model.find(JSON.parse(queryStr));

  // Select fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query.sort('-createdAt');
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments();

  query = query.skip(startIndex).limit(limit);

  // Execute query
  const results = await query;

  // Pagination results
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.prev = { page: page - 1, limit };
  }

  res.sortPaginate = {
    count: results.length,
    pagination,
    data: results,
  };

  next();
};

export { sortPaginate };
