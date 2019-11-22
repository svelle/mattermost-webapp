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
                        placeholder={Utils.localizeMessage('admin.support.flare.body.default', 'Please describe your issue here as detailed as possible.')}
                        helpText={
                            <FormattedMessage
                                id='admin.support.flare.body.description'
                                defaultMessage='Describe your issue.'
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
                        placeholder={Utils.localizeMessage('admin.support.flare.email.placeholder', 'E.g.: "10"')}
                        helpText={
                            <FormattedMessage
                                id='admin.support.flare.email.description'
                                defaultMessage='If you want to get responses to a different email address than the one set in the Customization section please enter it here.'
                            />
                        }
                        value={this.state.adminEmail}
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
