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

                <div className="text-xl font-gotham_black uppercase">Gotham Pro Black 40 </div>
                <div className="text-lg font-gotham font-semibold">Gotham Pro Medium 32</div>
                <div className="text-md font-semibold">Noto Sans Medium 20</div>
                <div className="text-md">Noto Sans Regular 20</div>
                <div className="text-base">Noto Sans Regular 16</div>
                <div className="text-sm">Noto Sans Regular 14</div>

                <div className="my-10" />

                <button className="bg-green rounded-full text-white text-sm flex justify-center items-center h-12 w-72 clickable">Green button</button>

                <div className="my-10" />

                <button className="bg-white rounded-full text-green text-sm flex justify-center items-center h-12 w-72 clickable border-green border-2 border-solid">White button</button>

                <div className="my-10" />
            </>
        );
    }
}

export default MarkupPage;
