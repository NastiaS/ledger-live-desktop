// @flow

import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import type { LocationShape } from 'react-router'

import accounts from './accounts'
import application from './application'
import counterValues from './counterValues'
import devices from './devices'
import modals from './modals'
import settings from './settings'
import update from './update'
import onboarding from './onboarding'

import type { AccountsState } from './accounts'
import type { ApplicationState } from './application'
import type { CounterValuesState } from './counterValues'
import type { DevicesState } from './devices'
import type { ModalsState } from './modals'
import type { SettingsState } from './settings'
import type { UpdateState } from './update'
import type { OnboardingState } from './onboarding'

export type State = {
  accounts: AccountsState,
  application: ApplicationState,
  counterValues: CounterValuesState,
  devices: DevicesState,
  modals: ModalsState,
  router: LocationShape,
  settings: SettingsState,
  update: UpdateState,
  onboarding: OnboardingState,
}

export default combineReducers({
  accounts,
  application,
  counterValues,
  devices,
  modals,
  router,
  settings,
  update,
  onboarding,
})
