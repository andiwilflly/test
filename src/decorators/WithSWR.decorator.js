import React from 'react';
import useSWR from 'swr';


const WithSWR = function(settings = {}) {

	// Case when we don`t have any options
	if(typeof settings === 'function') return _renderSWRComponent(settings, {});

	return (WrappedComponent)=> _renderSWRComponent(WrappedComponent, settings);
};


const fetcher = (...args) => fetch(...args).then(res => res.json());



function _renderSWRComponent(WrappedComponent, settings = {}) {

	if(!settings.url) return <div>failed to load (no url)</div>;

	return function WithSWR(props) {

		const { data, error } = useSWR(settings.url, fetcher);

		if(error) return <div>failed to load</div>;
		if(!data) return <div>loading...</div>;

		const newProps = {
			...props,
			[settings.name || 'data']: data
		};

		return <WrappedComponent { ...newProps } />
	};
}


export default WithSWR;