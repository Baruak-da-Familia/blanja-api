const formResponse = {
	success: (res, data) => {
		const formResponObj = {
			success: true,
			status: 200,
			data: data,
		};
		res.json(formResponObj);
	},

	error: (res, error) => {
		const formResponObj = {
			success: false,
			status: 500,
			error: error,
		};
		res.json(formResponObj);
	},
	pagination: ({ query }, res, data) => {
		const { name, category, brand, page, limit } = query;
		const prevPage =
			Number(page) === 1
				? ""
				: `/?name=${name}&brand=${brand}&category=${category}&page=${
						Number(page) - 1
				  }&limit=${Number(limit)}`;
		const nextPage =
			data.length < Number(limit) / 5
				? ""
				: `/?name=${name}&brand=${brand}&category=${category}&page=${Number(
						page
				  )}&limit=${Number(limit)}`;
		const responseObj = {
			success: true,
			status: 200,
			data,
			pageInfo: {
				currentPage: query.page,
				limit: query.limit,
				prevPage,
				nextPage,
			},
		};

		res.json(responseObj);
	},
};

module.exports = formResponse;
