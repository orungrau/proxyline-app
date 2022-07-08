import {StackActions} from '@react-navigation/native';
import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/core';

export class NavigationService {
  navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();

  private static instance: NavigationService;

  private constructor() {}

  public static shared(): NavigationService {
    if (!NavigationService.instance) {
      NavigationService.instance = new NavigationService();
    }
    return NavigationService.instance;
  }

  public static navigate(name: string, params?: any) {
    const pushAction = StackActions.push(name, params);
    this.instance.navigationRef.current?.dispatch(pushAction);
  }

  public static popToTop() {
    const pushAction = StackActions.popToTop();
    this.instance.navigationRef.current?.dispatch(pushAction);
  }

  public static replace(name: string, params?: any) {
    const replaceAction = StackActions.replace(name, params);
    this.instance.navigationRef.current?.dispatch(replaceAction);
  }

  public static back() {
    const pushAction = StackActions.pop(1);
    this.instance.navigationRef.current?.dispatch(pushAction);
  }
}
