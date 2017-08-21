import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './mock.fake.backend';


@NgModule({
    imports: [
        HttpModule
    ],
    providers: [
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ]
})

export class MockModule { }