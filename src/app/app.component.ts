import {Component, ElementRef, ViewChild} from '@angular/core';
import {PubNubAngular} from 'pubnub-angular2';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    @ViewChild('audioOptionHit') audioPlayerRefHit: ElementRef;
    @ViewChild('audioOptionMiss') audioPlayerRefMiss: ElementRef;
    pubnub: PubNubAngular;
    channel: string;
    finished: boolean;
    userBoard: any;
    alexaBoard: any;
    tempBoard = [
        ['a', 'b', 'c', 'd', 'e'],
        ['f', 'g', 'h', 'i', 'j'],
        ['k', 'l', 'm', 'n', 'o'],
        ['p', 'q', 'r', 's', 't'],
        ['u', 'v', 'w', 'x', 'y']
    ];

    constructor(private _pubnub: PubNubAngular) {
        /**
         * Work out if we have an id to work with
         */
        this.channel = this.getUrlParameter('id');
        if (this.channel) {
            /**
             * We have a channel so we should start sub with pubnub
             */
            this.pubnub = _pubnub;
            this.pubnub.init({
                publishKey: 'pub-c-86bc1976-2064-4f3d-a03c-faa9dcb59a07',
                subscribeKey: 'sub-c-5b5c9f7a-e3d9-11e7-ad36-deb77ae39928',
                uuid: 'pirateShipFE'
            });
            this.pubnub.subscribe({
                channels: [this.channel],
                triggerEvents: ['message']
            });
            this.pubnub.getMessage(this.channel, (message) => {
                console.log(JSON.parse(message.message));
                /**
                 * See if we have to play any sounds
                 */
                if (JSON.parse(message.message).data.soundType === 'hit') {
                    this.audioPlayerRefHit.nativeElement.play();
                } else if (JSON.parse(message.message).data.soundType === 'missed') {
                    this.audioPlayerRefMiss.nativeElement.play();
                }
                /**
                 * Update User Board
                 */
                this.userBoard = JSON.parse(message.message).data.userBoard;
                /**
                 * Update Alexa Board
                 */
                this.alexaBoard = JSON.parse(message.message).data.alexaBoard;
                /**
                 * Check to see if our game has ended
                 */
                if (JSON.parse(message.message).data.status === 'finished') {
                    this.userBoard = null;
                    this.alexaBoard = null;
                    this.finished = true;
                }
            });
        }
    }

    /**
     * Grab a param from the URL
     * @param sParam
     * @returns {string}
     */
    private getUrlParameter(sParam) {
        return decodeURIComponent(window.location.search.substring(1)).split('&')
            .map((v) => {
                return v.split('=');
            })
            .filter((v) => {
                return (v[0] === sParam) ? true : false;
            })
            .reduce((prev, curv, index, array) => {
                return curv[1];
            }, undefined);
    }
}
