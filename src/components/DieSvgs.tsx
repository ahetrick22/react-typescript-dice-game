import React from 'react';
import {DiceSides} from "../types/diceSides";

export const DieSvgs = (type: DiceSides, fill = 'red') => {
    switch (type) {
        case DiceSides.one:
            return <svg
                viewBox="0 0 606 600" x="0px" y="0px" fillRule="evenodd" clipRule="evenodd"
                fill={fill}
            >
                <g>
                    <path className="fil0" d="M562 0c24,0 44,20 44,44l0 503c0,24 -20,44 -44,44l-518 0c-24,0 -44,-20 -44,-44l0 -503c0,-24 20,-44 44,-44l518 0zm-259 148c81,0 148,66 148,147 0,82 -67,148 -148,148 -82,0 -148,-66 -148,-148 0,-81 66,-147 148,-147z"/>
                </g>
            </svg>
        case DiceSides.two:
            return <svg
                viewBox="0 0 604 737.5" x="0px" y="0px" fillRule="evenodd" clipRule="evenodd"
                fill={fill}
            >
                <g>
                    <path className="fil0" d="M44 0l516 0c24,0 44,20 44,44l0 502c0,24 -20,44 -44,44l-516 0c-24,0 -44,-20 -44,-44l0 -502c0,-24 20,-44 44,-44zm422 530c38,0 69,-31 69,-69 0,-39 -31,-70 -69,-70 -39,0 -70,31 -70,70 0,38 31,69 70,69zm-330 -470c39,0 70,31 70,69 0,39 -31,70 -70,70 -38,0 -70,-31 -70,-70 0,-38 32,-69 70,-69z"/>
                </g>
             </svg>
        case DiceSides.three:
            return <svg
                        viewBox="0 0 604 737.5" x="0px" y="0px" fillRule="evenodd" clipRule="evenodd"
                        fill={fill}
            >
                <g>
                    <path className="fil0" d="M44 0l516 0c24,0 44,20 44,44l0 502c0,24 -20,44 -44,44l-516 0c-24,0 -44,-20 -44,-44l0 -502c0,-24 20,-44 44,-44zm328 295c-1,-38 -32,-69 -70,-69 -38,0 -69,31 -70,69 1,38 32,69 70,69 38,0 69,-31 70,-69zm-236 235c39,0 70,-31 70,-69 0,-39 -31,-70 -70,-70 -38,0 -70,31 -70,70 0,38 32,69 70,69zm330 -470c38,0 69,31 69,69 0,39 -31,70 -69,70 -39,0 -70,-31 -70,-70 0,-38 31,-69 70,-69z"/>
                </g>
              </svg>
        case DiceSides.four:
            return <svg viewBox="0 0 604 737.5" x="0px" y="0px" fillRule="evenodd" clipRule="evenodd"
                        fill={fill}
            >
            <g>
                <path className="fil0" d="M44 0l516 0c24,0 44,20 44,44l0 502c0,24 -20,44 -44,44l-516 0c-24,0 -44,-20 -44,-44l0 -502c0,-24 20,-44 44,-44zm92 530c39,0 70,-31 70,-69 0,-39 -31,-70 -70,-70 -38,0 -70,31 -70,70 0,38 32,69 70,69zm330 0c38,0 69,-31 69,-69 0,-39 -31,-70 -69,-70 -39,0 -70,31 -70,70 0,38 31,69 70,69zm-330 -470c39,0 70,31 70,69 0,39 -31,70 -70,70 -38,0 -70,-31 -70,-70 0,-38 32,-69 70,-69zm330 0c38,0 69,31 69,69 0,39 -31,70 -69,70 -39,0 -70,-31 -70,-70 0,-38 31,-69 70,-69z"/>
            </g>
            </svg>
        case DiceSides.five:
            return <svg
                        viewBox="0 0 8220 10275" x="0px" y="0px" fillRule="evenodd" clipRule="evenodd"
                        fill={fill}
            >
                <g>
                    <path className="fil0" d="M7289 0l-6358 0c-512,0 -931,419 -931,931l0 6358c0,512 419,931 931,931l6358 0c512,0 931,-419 931,-931l0 -6358c0,-512 -419,-931 -931,-931zm-1054 5109c637,0 1154,516 1154,1154 0,637 -517,1154 -1154,1154 -637,0 -1154,-517 -1154,-1154 0,-638 517,-1154 1154,-1154zm-4250 0c637,0 1154,516 1154,1154 0,637 -517,1154 -1154,1154 -637,0 -1154,-517 -1154,-1154 0,-638 517,-1154 1154,-1154zm2125 -2153c637,0 1154,517 1154,1154 0,637 -517,1154 -1154,1154 -637,0 -1154,-517 -1154,-1154 0,-637 517,-1154 1154,-1154zm2125 -2153c637,0 1154,517 1154,1154 0,638 -517,1154 -1154,1154 -637,0 -1154,-516 -1154,-1154 0,-637 517,-1154 1154,-1154zm-4250 0c637,0 1154,517 1154,1154 0,638 -517,1154 -1154,1154 -637,0 -1154,-516 -1154,-1154 0,-637 517,-1154 1154,-1154z"/>
                </g>
               </svg>
        case DiceSides.six:
            return <svg
                viewBox="0 0 606 738.75" x="0px" y="0px" fillRule="evenodd" clipRule="evenodd"
                fill={fill}
            >
                <g>
                    <path className="fil0" d="M562 0c24,0 44,20 44,44l0 503c0,24 -20,44 -44,44l-518 0c-24,0 -44,-20 -44,-44l0 -503c0,-24 20,-44 44,-44l518 0zm-355 43c-39,0 -70,31 -70,69 0,39 31,70 70,70 38,0 69,-31 69,-70 0,-38 -31,-69 -69,-69zm0 354c-39,0 -70,31 -70,70 0,38 31,69 70,69 38,0 69,-31 69,-69 0,-39 -31,-70 -69,-70zm0 -171c-39,0 -70,31 -70,69 0,39 31,70 70,70 38,0 69,-31 69,-70 0,-38 -31,-69 -69,-69zm192 -183c38,0 70,31 70,69 0,39 -32,70 -70,70 -39,0 -70,-31 -70,-70 0,-38 31,-69 70,-69zm0 354c39,0 70,31 70,70 0,38 -31,69 -70,69 -38,0 -70,-31 -70,-69 0,-39 32,-70 70,-70zm0 -171c38,0 70,31 70,69 0,39 -32,70 -70,70 -38,0 -70,-31 -70,-70 0,-38 32,-69 70,-69z"/>
                </g>
              </svg>
    }
}