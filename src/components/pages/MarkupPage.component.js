import React from "react";


class MarkupPage extends React.Component {

    render() {
        return (
            <>

                <div className="grid gap-1 grid-cols-5 desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
                    <div className="bg-green">1</div>
                    <div className="bg-green">2</div>
                    <div className="bg-green">3</div>
                    <div className="bg-green">4</div>
                    <div className="bg-green">5</div>
                    <div className="bg-green">6</div>
                </div>

                <div className="my-10" />

                <div className="text-xl font-gotham_black uppercase">text-xl font-gotham_black uppercase</div>
                <div className="text-lg font-gotham font-semibold">text-lg font-gotham font-semibold</div>
                <div className="text-md font-semibold">Noto Sans Medium 20 ( text-md font-semibold )</div>
                <div className="text-md">Noto Sans Regular 20 ( text-md )</div>
                <div className="text-base">Noto Sans Regular 16 ( text-base )</div>
                <div className="text-sm">Noto Sans Regular 14 ( text-sm )</div>

                <div className="my-10" />

                <div className="grid gap-7 grid-cols-2">

                    <button className="button">Green button</button>

                    <button className="button-green">White button</button>

                    <button className="button" disabled>Green button</button>

                    <button className="button-green" disabled>White button</button>
                </div>

                <div className="my-10" />
            </>
        );
    }
}

export default MarkupPage;
