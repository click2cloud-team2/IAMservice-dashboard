// Copyright 2020 Authors of Arktos.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';

import {TENANTMANAGEMENT_ROUTE} from '../routing';

import {TenantUsersListComponent} from './list/component';
import {TenantUsersDetailComponent} from './detail/component';

const USERS_LIST_ROUTE: Route = {
  path: '',
  component: TenantUsersListComponent,
  data: {
    breadcrumb: 'Users',
    parent: TENANTMANAGEMENT_ROUTE,
  },
};

const USERS_DETAIL_ROUTE: Route = {
  path: ':resourceName',
  component: TenantUsersDetailComponent,
  data: {
    breadcrumb: '{{ resourceName }}',
    parent: USERS_LIST_ROUTE,
  },
};

@NgModule({
  imports: [RouterModule.forChild([USERS_LIST_ROUTE, USERS_DETAIL_ROUTE])],
  exports: [RouterModule],
})
export class TenantUsersRoutingModule {}
