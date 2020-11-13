import React from 'react';
import useSWR from 'swr';
import store from "../store";


const WithSWR = function(settings = {}) {

	// Case when we don`t have any options
	if(typeof settings === 'function') return _renderSWRComponent(settings, {});

	return (WrappedComponent)=> _renderSWRComponent(WrappedComponent, settings);
};


const fetcher = (...args) => store.auth.fetch(...args).then(res => res.json());



function _renderSWRComponent(WrappedComponent, settings = {}) {

	if(!settings.url) return <div>failed to load (no url)</div>;

	return function WithSWR(props) {

		const { data, error, mutate } = useSWR(settings.url, fetcher);

		if(error) return <div>failed to load</div>;
		if(!data) return <div>loading...</div>;

		const newProps = {
			...props,
			mutateSWR: mutate,
			[settings.name || 'data']: data
		};

		return <WrappedComponent { ...newProps } />
	};
}


export default WithSWR;
