import {animate, state, style, transition, trigger} from "@angular/animations";

export const animations =
  trigger('fadeInOut', [
    state('start', style([
      {width: '0%'}
    ])),
    state('end', style([
      {width: '100%'}
    ])),
    transition('start => end', [animate('1000ms ease-out')]),
  ]);
  trigger('fadeOutOut ', [
    state('start', style([
      {width: '100%'}
    ])),
    state('end', style([
      {width: '0%'}
    ])),
    transition('end => start', [animate('1000ms ease-out')])
  ])
