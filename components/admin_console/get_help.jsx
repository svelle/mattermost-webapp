// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

import * as Utils from 'utils/utils.jsx';
import {t} from 'utils/i18n';

import AdminSettings from './admin_settings';
import Setting from './setting';
import SettingsGroup from './settings_group.jsx';
import TextSetting from './text_setting';

export default class GetHelp extends AdminSettings {
    constructor(props) {
        super(props);
    }

    getConfigFromState = (config) => {
        return config;
    }

    getStateFromConfig(config) {
        return {
            adminEmail: config.SupportSettings.SupportEmail,
        };
    }


    renderTitle() {
        return (
            <FormattedMessage
                id='admin.support.flare'
                defaultMessage='Get Help'
            />
        );
    }

    renderSettings = () => {
        return (
            <SettingsGroup>
                <div>
                    <TextSetting
                        id='SupportSubject'
                        label={
                            <FormattedMessage
                                id='admin.support.flare.subject'
                                defaultMessage='Subject:'
                            />
                        }
                        placeholder={Utils.localizeMessage('admin.support.flare.subject.default', 'E.g.: "Users getting deactivated after LDAP sync"')}
                        helpText={
                            <FormattedMessage
                                id='admin.support.flare.subject.description'
                                defaultMessage='The subject of your ticket.'
                            />
                        }
                    />
                    <TextSetting
                        id='SupportBody'
                        label={
                            <FormattedMessage
                                id='admin.support.flare.body'
                                defaultMessage='Issue Description:'
                            />
                        }
                        type={'textarea'}
                        placeholder={Utils.localizeMessage('admin.support.flare.body.default', 'E.g.: "After changing our LDAP group filter some users keep getting disabled and can\'t login anymore."')}
                        helpText={
                            <FormattedMessage
                                id='admin.support.flare.body.description'
                                defaultMessage='Describe your issue as detailed as possible. Important diagnostic files such as the server config and logs will be sanitized, compressed and attached automatically.'
                            />
                        }
                    />
                    <TextSetting
                        id='SupportEmail'
                        label={
                            <FormattedMessage
                                id='admin.support.flare.email'
                                defaultMessage='Response Email Address:'
                            />
                        }
                        placeholder={Utils.localizeMessage('admin.support.flare.email.placeholder', 'E.g.: "admin@example.com"')}
                        helpText={
                            <FormattedMessage
                                id='admin.support.flare.email.description'
                                defaultMessage='The sender of this email is automatically set to the Support Email setup in the SiteConfiguration->Customization section of the System Console.'
                            />
                        }
                        value={this.state.adminEmail}
                        disabled={true}
                    />
                    {/*TODO: Make this button actually send off the email*/}
                    <button
                        type='submit'
                        className='btn btn-primary'
                        onClick={this.reload}
                    >
                        <FormattedMessage
                            id='admin.support.flare.send'
                            defaultMessage='Send'
                        />
                    </button>
                </div>
            </SettingsGroup>
        );
    }
}
