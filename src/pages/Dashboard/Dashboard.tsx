import React, { useContext } from 'react';
import { useTranslator } from '@jutro/locale';
import { Flex, FlexItem } from '@jutro/layout';
import styles from './Dashboard.module.scss';
import {
    StepProgressBar,
    Button,
    Card,
    Tag,
    InfoLabel,
    LookupField,
    TreeView,
    TreeNode,
    SimpleProgressBar,
} from '@jutro/components';
import { GridLayout } from '@jutro/layout';
import { Link } from '@jutro/router';
import { ModalNextContext } from '@jutro/components/main';
import { Breadcrumb } from '@jutro/router/Breadcrumb/Breadcrumb';

const Tombstone = () => {
    return (
        <GridLayout columns={[2, 8, 2]}>
            <FlexItem>
                <div>
                    <div>Claim Number:</div>

                    <div className="text-bold">#1231241</div>
                </div>
            </FlexItem>
            <FlexItem>
                <div>
                    <div>Employer:</div>
                    <div className="text-bold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                    </div>
                </div>
            </FlexItem>
            <FlexItem>
                <div className="text-centered">
                    <Link
                        onClick={function noRefCheck() {}}
                        onKeyPress={function noRefCheck() {}}
                    >
                        Switch Claim
                    </Link>
                </div>
            </FlexItem>
        </GridLayout>
    );
};

export const Dashboard = (): JSX.Element => {
    const translator = useTranslator();

    return (
        <div className={styles.dashboardContainer}>
            <h1>Color Palette</h1>
            <h2>Primary Colors</h2>
            <Flex direction="row">
                <div className="w-20 ws-bg-primary-1 text-white p-4">
                    Primary #1
                </div>
                <div className="w-20 ws-bg-primary-2 text-white p-4">
                    Primary #2
                </div>
                <div className="w-20 ws-bg-primary-3 text-white p-4">
                    Primary #3
                </div>
            </Flex>
            <hr />
            <h2>Alert Colors</h2>
            <Flex direction="row">
                <div className="w-20 ws-bg-alert-1 text-black p-4">
                    Alert #1
                </div>
                <div className="w-20 ws-bg-alert-2 text-black p-4">
                    Alert #2
                </div>
            </Flex>

            <hr />
            <h2>Typography</h2>
            <Flex direction="row">
                <h1>
                    H1 - Workplace Safety and Insurance Board provides wage-loss
                    benefits, medical coverage and support to help people get
                    back to work after a work-related injury or illness.{' '}
                </h1>
            </Flex>
            <Flex direction="row">
                <h2>
                    H2 - Workplace Safety and Insurance Board provides wage-loss
                    benefits, medical coverage and support to help people get
                    back to work after a work-related injury or illness.{' '}
                </h2>
            </Flex>
            <Flex direction="row">
                <h3>
                    H3 - Workplace Safety and Insurance Board provides wage-loss
                    benefits, medical coverage and support to help people get
                    back to work after a work-related injury or illness.{' '}
                </h3>
            </Flex>
            <Flex direction="row">
                <h4>
                    H4 - Workplace Safety and Insurance Board provides wage-loss
                    benefits, medical coverage and support to help people get
                    back to work after a work-related injury or illness.{' '}
                </h4>
            </Flex>
            <Flex direction="row">
                <h5>
                    H5 - Workplace Safety and Insurance Board provides wage-loss
                    benefits, medical coverage and support to help people get
                    back to work after a work-related injury or illness.{' '}
                </h5>
            </Flex>
            <Flex direction="row">
                <h6>
                    H6 - Workplace Safety and Insurance Board provides wage-loss
                    benefits, medical coverage and support to help people get
                    back to work after a work-related injury or illness.{' '}
                </h6>
            </Flex>
            <Flex direction="row">
                <p>
                    p - Workplace Safety and Insurance Board provides wage-loss
                    benefits, medical coverage and support to help people get
                    back to work after a work-related injury or illness.{' '}
                </p>
            </Flex>

            <hr />

            <h1>Tombstone</h1>
            <Tombstone />
            <hr />

            <h2>Text Link</h2>
            <Flex direction="row">
                <Link
                    onClick={function noRefCheck() {}}
                    onKeyPress={function noRefCheck() {}}
                >
                    Anchor Link
                </Link>
            </Flex>

            <hr />

            <h2>Cards</h2>
            <Flex direction="row">
                <Card subTitle="Claim Number: #123123" title="Claim Details">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </div>
                </Card>
            </Flex>
            <hr />

            <h2>Tags</h2>
            <Flex direction="row">
                <Tag label="Fire" onClick={function noRefCheck() {}} />
                <Tag label="Water" onClick={function noRefCheck() {}} />
                <Tag label="Earth" onClick={function noRefCheck() {}} />
            </Flex>

            <h2>Breadcrumb</h2>
            <Flex direction="row">
                <Breadcrumb
                    links={[
                        {
                            href: 'https://wsib.ca',
                            text: 'Home',
                        },
                        {
                            href: 'https://wsib.ca',
                            text: 'About',
                        },
                        {
                            href: 'https://wsib.ca',
                            text: 'Our team',
                        },
                        {
                            href: 'https://wsib.ca',
                            text: 'John Doe',
                        },
                    ]}
                />
            </Flex>

            <h2>Info Label</h2>
            <Flex gap="small">
                <FlexItem>
                    <InfoLabel type="success">Lorem ipsum</InfoLabel>
                </FlexItem>
                <FlexItem>
                    <InfoLabel type="error">Lorem ipsum</InfoLabel>
                </FlexItem>
                <FlexItem>
                    <InfoLabel type="warning">Lorem ipsum</InfoLabel>
                </FlexItem>
                <FlexItem>
                    <InfoLabel>Lorem ipsum</InfoLabel>
                </FlexItem>
                <FlexItem>
                    <InfoLabel type="neutral">Lorem ipsum</InfoLabel>
                </FlexItem>
            </Flex>

            <hr />

            <h2>Search by keyword</h2>
            <Flex direction="row">
                <LookupField
                    availableValues={[
                        {
                            displayName: 'Marcello Carcia - 234567876551',
                            id: '1',
                            type: 'account',
                        },
                        {
                            displayName: 'Marine - 234567874321',
                            id: '2',
                            type: 'policy',
                        },
                        {
                            displayName: 'Markus Latchford - 234567879698',
                            id: '3',
                            type: 'contact',
                        },
                        {
                            displayName: 'Paul Mary - 234567875164',
                            id: '4',
                            type: 'car',
                        },
                        {
                            displayName: 'Marty Whealan - 23456785164',
                            id: '5',
                            type: 'address',
                        },
                        {
                            displayName: 'Qui-Gon Jinn - 12345678911',
                            id: '6',
                            type: 'business',
                        },
                        {
                            displayName: 'Sheev Palpatine - 9876543210',
                            id: '7',
                            isDisabled: true,
                            type: 'sith',
                        },
                    ]}
                    id="lookup-field"
                    label="Lookup field label"
                    onBlur={function noRefCheck() {}}
                    onFocus={function noRefCheck() {}}
                    onValidationChange={function noRefCheck() {}}
                    onValueChange={function noRefCheck() {}}
                    optionTypes={[
                        {
                            className: 'jut__lookup__lookupOptionContact',
                            displayName: 'Contact',
                            icon: 'gw-perm-contact-calendar',
                            type: 'contact',
                        },
                        {
                            className: 'jut__lookup__lookupOptionAccount',
                            displayName: 'Account',
                            icon: 'gw-account-circle',
                            type: 'account',
                        },
                        {
                            className: 'jut__lookup__lookupOptionPolicy',
                            displayName: 'Policy',
                            icon: 'gw-description',
                            type: 'policy',
                        },
                        {
                            className: 'jut__lookup__lookupOptionCar',
                            displayName: 'Car/VIN',
                            icon: 'gw-directions-car',
                            type: 'car',
                        },
                        {
                            className: 'jut__lookup__lookupOptionBusiness',
                            displayName: 'Business',
                            icon: 'gw-business',
                            type: 'business',
                        },
                        {
                            className: 'jut__lookup__lookupOptionAddress',
                            displayName: 'Address',
                            icon: 'gw-home-work',
                            type: 'address',
                        },
                    ]}
                    placeholder="Lookup field placeholder"
                />
            </Flex>

            <h2>Treeview</h2>
            <Flex direction="row">
                <TreeView onClick={function noRefCheck() {}}>
                    <React.Fragment key=".0">
                        <TreeNode
                            id="node-department"
                            label="Company Departments"
                        >
                            <TreeNode id="node-hr" label="Human Resources">
                                <TreeNode
                                    id="node-hr-recruitment"
                                    label="Recruitment"
                                />
                                <TreeNode
                                    id="node-hr-benefits"
                                    label="Benefits & Compensation"
                                />
                            </TreeNode>
                            <TreeNode
                                id="node-it"
                                label="Information Technology"
                            >
                                <TreeNode
                                    id="node-it-support"
                                    label="Technical Support"
                                />
                                <TreeNode
                                    id="node-it-development"
                                    label="Software Development"
                                >
                                    <TreeNode
                                        id="node-it-development-web"
                                        label="Web Development"
                                    />
                                    <TreeNode
                                        id="node-it-development-app"
                                        label="Application Development"
                                    />
                                </TreeNode>
                            </TreeNode>
                            <TreeNode id="node-finance" label="Finance">
                                <TreeNode
                                    id="node-finance-accounting"
                                    label="Accounting"
                                />
                                <TreeNode
                                    id="node-finance-payroll"
                                    label="Payroll"
                                />
                            </TreeNode>
                        </TreeNode>
                        <TreeNode
                            disabled
                            id="node-temporary"
                            label="Temporary Projects"
                        >
                            <TreeNode
                                id="node-temporary-project1"
                                label="Project 1"
                            />
                        </TreeNode>
                        <TreeNode id="node-operations" label="Operations" />
                    </React.Fragment>
                </TreeView>
            </Flex>

            <h2>Progress Indicators</h2>

            <h3>Simple Progress Bar</h3>
            <SimpleProgressBar
                completed={25}
                hideLabel
                label="Show wizard progress"
                total={100}
            />
            <hr />
            <h3>Step Progress Bar</h3>
            <Flex direction="column" className={styles.flexContainer}>
                <StepProgressBar
                    steps={[
                        {
                            title: 'Employee Information',
                            visited: true,
                        },
                        {
                            title: 'Industry Information',
                            visited: false,
                        },
                        {
                            disabled: true,
                            title: 'Eligibility Result',
                            visited: false,
                        },
                    ]}
                />
            </Flex>

            <h2>Buttons</h2>
            <GridLayout columns={[1, 1, 1]} id="grid-layout">
                <Button label="filled"></Button>
                <Button label="filled"></Button>
                <Button label="filled"></Button>
            </GridLayout>

            <h2>Accordion</h2>
            <Flex direction="row">Accordions to go here...</Flex>

            <h2>Icons</h2>
            <Flex direction="row">Icons to go here...</Flex>

            <h2>Avatar</h2>
            <Flex direction="row">Avatar to go here...</Flex>

            <h2>Badge</h2>
            <Flex direction="row">Badge to go here...</Flex>

            <h2>Footer</h2>
            <Flex direction="row">Footer to go here...</Flex>

            <h2>Menu</h2>
            <Flex direction="row">Hamburger to go here...</Flex>

            <h2>Tabs</h2>
            <Flex direction="row">Tabs to go here</Flex>

            <h2>Input Controls</h2>
            <Flex direction="row">Input Controls to go here</Flex>

            <h2>Notifications</h2>
            <Flex direction="row">Notifications to go here</Flex>

            <h2>Tables</h2>
            <Flex direction="row">Tables to go here</Flex>
        </div>
    );
};
