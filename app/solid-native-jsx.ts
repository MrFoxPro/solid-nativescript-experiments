import {
    ViewBase,
    Style,
    AbsoluteLayout,
    ActionBar,
    ActionItem,
    ActivityIndicator,
    Button,
    ContentView,
    DatePicker,
    DockLayout,
    FlexboxLayout,
    FormattedString,
    Frame,
    GridLayout,
    HtmlView,
    Image,
    Label,
    ListPicker,
    ListView,
    NavigationButton,
    Page,
    Placeholder,
    Progress,
    ScrollView,
    SearchBar,
    SegmentedBar,
    SegmentedBarItem,
    Slider,
    Span,
    StackLayout,
    Switch,
    TabView,
    TabViewItem,
    TextField,
    TextView,
    TimePicker,
    WebView,
    WrapLayout,
} from "@nativescript/core";

import {
    TAbsoluteLayoutAttributes,
    TActionBarAttributes,
    TPageAttributes,
    TActionItemAttributes,
    TActivityIndicatorAttributes,
    TButtonAttributes,
    TContainerViewAttributes,
    TContentViewAttributes,
    TCustomLayoutViewAttributes,
    TDatePickerAttributes,
    TDockLayoutAttributes,
    TEditableTextBaseAttributes,
    TFlexboxLayoutAttributes,
    TFormattedStringAttributes,
    TFrameAttributes,
    TFrameBaseAttributes,
    TGridLayoutAttributes,
    THtmlViewAttributes,
    TImageAttributes,
    TLabelAttributes,
    TLayoutBaseAttributes,
    TListPickerAttributes,
    TListViewAttributes,
    TNavigationButtonAttributes,
    TObservableAttributes,
    TPageBaseAttributes,
    TPlaceholderAttributes,
    TProgressAttributes,
    TProxyViewContainerAttributes,
    TRepeaterAttributes,
    TRootLayoutAttributes,
    TScrollViewAttributes,
    TSearchBarAttributes,
    TSegmentedBarAttributes,
    TSegmentedBarItemAttributes,
    TSliderAttributes,
    TSpanAttributes,
    TStackLayoutAttributes,
    TSwitchAttributes,
    TTabViewAttributes,
    TTabViewItemAttributes,
    TTextBaseAttributes,
    TTextFieldAttributes,
    TTextViewAttributes,
    TTimePickerAttributes,
    TViewAttributes,
    TViewBaseAttributes,
    TWebViewAttributes,
    TWrapLayoutAttributes,
} from "./nativescript-jsx";

export type RNSStyle = {
    [P in keyof Style]?: string | Style[P];
};

export interface TNativeScriptAttributes<T extends ViewBase = ViewBase> {
    nodeRole?: string;
    style?: RNSStyle;
    children?: JSX.IntrinsicElements[] | string;
}

export type NativeScriptProps<P, T extends ViewBase = ViewBase> = TNativeScriptAttributes<T> & P;

declare global {
    module JSX {
        interface IntrinsicElements {
            absoluteLayout: NativeScriptProps<TAbsoluteLayoutAttributes, AbsoluteLayout>;
            actionBar: NativeScriptProps<TActionBarAttributes, ActionBar>;
            actionItem: NativeScriptProps<TActionItemAttributes, ActionItem>;
            activityIndicator: NativeScriptProps<TActivityIndicatorAttributes, ActivityIndicator>;
            button: NativeScriptProps<TButtonAttributes, Button>;
            // bottomNavigation: NativeScriptProps<
            //     TBottomNavigationAttributes,
            //     BottomNavigation
            // >;
            contentView: NativeScriptProps<TContentViewAttributes, ContentView>;
            datePicker: NativeScriptProps<TDatePickerAttributes, DatePicker>;
            dockLayout: NativeScriptProps<TDockLayoutAttributes, DockLayout>;
            flexboxLayout: NativeScriptProps<TFlexboxLayoutAttributes, FlexboxLayout>;
            formattedString: NativeScriptProps<TFormattedStringAttributes, FormattedString>;
            frame: NativeScriptProps<TFrameAttributes, Frame>;
            gridLayout: NativeScriptProps<TGridLayoutAttributes, GridLayout>;
            htmlView: NativeScriptProps<THtmlViewAttributes, HtmlView>;
            image: NativeScriptProps<TImageAttributes, Image>;
            label: NativeScriptProps<TLabelAttributes, Label>;
            listPicker: NativeScriptProps<TListPickerAttributes, ListPicker>;
            listView: NativeScriptProps<TListViewAttributes, ListView>;
            navigationButton: NativeScriptProps<TNavigationButtonAttributes, NavigationButton>;
            page: NativeScriptProps<TPageAttributes, Page>;
            placeholder: NativeScriptProps<TPlaceholderAttributes, Placeholder>;
            progress: NativeScriptProps<TProgressAttributes, Progress>;
            scrollView: NativeScriptProps<TScrollViewAttributes, ScrollView>;
            searchBar: NativeScriptProps<TSearchBarAttributes, SearchBar>;
            segmentedBar: NativeScriptProps<TSegmentedBarAttributes, SegmentedBar>;
            segmentedBarItem: NativeScriptProps<TSegmentedBarItemAttributes, SegmentedBarItem>;
            slider: NativeScriptProps<TSliderAttributes, Slider>;
            span: NativeScriptProps<TSpanAttributes, Span>;
            stackLayout: NativeScriptProps<TStackLayoutAttributes, StackLayout>;
            switch: NativeScriptProps<TSwitchAttributes, Switch>;
            // tabs: NativeScriptProps<TTabsAttributes, Tabs>;
            // tabStrip: NativeScriptProps<TTabStripAttributes, TabStrip>;
            // tabStripItem: NativeScriptProps<
            //     TTabStripItemAttributes,
            //     TabStripItem
            // >;
            // tabContentItem: NativeScriptProps<
            //     TTabContentItemAttributes,
            //     TabContentItem
            // >;
            tabView: NativeScriptProps<TTabViewAttributes, TabView>;
            tabViewItem: NativeScriptProps<TTabViewItemAttributes, TabViewItem>;
            textField: NativeScriptProps<TTextFieldAttributes, TextField>;
            textView: NativeScriptProps<TTextViewAttributes, TextView>;
            timePicker: NativeScriptProps<TTimePickerAttributes, TimePicker>;
            webView: NativeScriptProps<TWebViewAttributes, WebView>;
            wrapLayout: NativeScriptProps<TWrapLayoutAttributes, WrapLayout>;
        }

        interface ElementChildrenAttribute {
            children: {};
        }
    }
}
