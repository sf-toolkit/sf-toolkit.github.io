import { LightningElement, api } from 'lwc';

export default class App extends LightningElement {
    get actions() {
        return [
            { title: 'Open the app', description: 'Access Analysis, Org monitoring, etc', icon: 'utility:open' },
            { title: 'CTA - Personal Notes', description: 'Read key notes related to the CTA Board', icon: 'utility:note' },
            { title: 'Install the Desktop App', description: 'Direct connect the SF Toolkit with your SFDX/SF CLI', icon: 'utility:download' },
            { title: 'Go to the repo (Github)', description: 'Any contribution is more than welcome.', icon: 'utility:info' }
        ];
    }
    
    @api features = [
        { id: 1, title: 'Animated Loop', description: 'GIFs loop automatically for continuous viewing.', image: 'https://cdn.textstudio.com/asset/text-animation-example.gif?20231026' },
        { id: 2, title: 'Color Palette', description: 'Supports a limited but vibrant color palette.', image: 'https://aquatransform.ch/wp-content/uploads/2017/12/sample-gif-image.gif' },
        { id: 3, title: 'Low File Size', description: 'Optimized for web with smaller file sizes.', image: 'https://www.aoaophoto.com/Sample/imgs/animation.gif' }
    ];
    get steps() {
        return [
            { title: 'Step 1: Login', content: 'Enter your email and password to access your account.' },
            { title: 'Step 2: Navigate', content: 'Use the sidebar to navigate through different sections of the app.' },
            { title: 'Step 3: Start a Project', content: 'Click on "New Project" to begin your work. Fill in the details to create a project.' },
            { title: 'Step 4: Collaborate', content: 'Invite team members by entering their email addresses in the project settings.' },
            { title: 'Step 5: Use Features', content: 'Explore features like task management, file sharing, and real-time chat.' }
        ];
    }
  /*  navigationItems = navigationItems;
    nextNavigationItem;
    previousNavigationItem;

    navigationElements = navigationElements;
    _isWindowHistoryUpdate = false;

    connectedCallback() {
        let that = this;
        window.onpopstate = function (event) {
            if (event.state && event.state.page) {
                that._isWindowHistoryUpdate = true;
                that.navigationItems[that.currentNavigationItem].visible =
                    false;
                that.currentNavigationItem = event.state.page;
                that.hideCurrentNavigationItemFromNav();
                that.handleCategoryChange();
            }
        };
        if (window.location.hash) {
            const location = window.location.hash.substring(
                1,
                window.location.hash.length
            );
            if (this.navigationElements.indexOf(location) > -1) {
                this.currentNavigationItem = location;
                window.history.replaceState({ page: location }, null, '');
            }
        } else {
            window.history.replaceState(
                { page: this.currentNavigationItem },
                null,
                ''
            );
        }
        this.navigationItems[this.currentNavigationItem].visible = true;
        this.calculateNavFooterElements();
    }

    handleCategoryChange(event) {
        if (event) {
            if (this.currentNavigationItem !== event.detail) {
                this.navigationItems[this.currentNavigationItem].visible =
                    false;
                this.currentNavigationItem = event.detail;
            } else {
                return;
            }
        }
        this.updateGoogleAnalyticsForSPA(this.currentNavigationItem);
        this.scrollAndLocation();
        this.calculateNavFooterElements();
        this.navigationItems[this.currentNavigationItem].visible = true;
    }

    handleNavigateNext() {
        this.hideCurrentNavigationItemFromNav();
        this.currentNavigationItem =
            this.navigationItems[
                this.navigationElements[
                    this.navigationElements.indexOf(
                        this.currentNavigationItem
                    ) + 1
                ]
            ].value;
        this.handleCategoryChange();
    }

    handleNavigatePrevious() {
        this.hideCurrentNavigationItemFromNav();
        this.currentNavigationItem =
            this.navigationItems[
                this.navigationElements[
                    this.navigationElements.indexOf(
                        this.currentNavigationItem
                    ) - 1
                ]
            ].value;
        this.handleCategoryChange();
    }

    calculateNavFooterElements() {
        this.nextNavigationItem =
            this.navigationItems[
                this.navigationElements[
                    this.navigationElements.indexOf(
                        this.currentNavigationItem
                    ) + 1
                ]
            ];
        this.previousNavigationItem =
            this.navigationItems[
                this.navigationElements[
                    this.navigationElements.indexOf(
                        this.currentNavigationItem
                    ) - 1
                ]
            ];
    }

    hideCurrentNavigationItemFromNav() {
        this.navigationItems[
            this.navigationElements[
                this.navigationElements.indexOf(this.currentNavigationItem)
            ]
        ].visible = false;
    }

    scrollAndLocation() {
        if (!this._isWindowHistoryUpdate) {
            window.history.pushState(
                { page: this.currentNavigationItem },
                null,
                '#'.concat(this.currentNavigationItem)
            );
        }
        this._isWindowHistoryUpdate = false;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    updateGoogleAnalyticsForSPA(newPage) {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        gtag('config', 'UA-45076517-19', {
            page_path: '#'.concat(newPage)
        });
    }*/
}
