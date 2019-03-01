import test from 'ava';

import {ipv4Validator, ipv6Validator} from '../lib'
import {v4Valid, v4InValid, v4Segment} from './v4MockData'
import {v6Valid, v6Invalid} from './v6MockData'

test('valid ipv4', t => {
    v4Valid.forEach(ip => t.true(ipv4Validator(ip)));
});

test('invalid ipv4', t => {
    v4InValid.forEach(ip => t.false(ipv4Validator(ip)));
});

test('normal ipv4 without segment', t => {
    v4Segment.forEach(ip => t.false(ipv4Validator(ip, {includeSegment: false})));
});

test('valid ipv6', t => {
    v6Valid.forEach(ip => t.true(ipv6Validator(ip)));
});

test('invalid ipv6', t => {
    v6Invalid.forEach(ip => t.false(ipv6Validator(ip)));
});