'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var core = require('@rjsf/core');
var React = _interopDefault(require('react'));
var Box = _interopDefault(require('@material-ui/core/Box'));
var Button = _interopDefault(require('@material-ui/core/Button'));
var Grid = _interopDefault(require('@material-ui/core/Grid'));
var Paper = _interopDefault(require('@material-ui/core/Paper'));
var AddIcon = _interopDefault(require('@material-ui/icons/Add'));
var ArrowUpward = _interopDefault(require('@material-ui/icons/ArrowUpward'));
var ArrowDownward = _interopDefault(require('@material-ui/icons/ArrowDownward'));
var Remove = _interopDefault(require('@material-ui/icons/Remove'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var List = _interopDefault(require('@material-ui/core/List'));
var ListItem = _interopDefault(require('@material-ui/core/ListItem'));
var ListItemIcon = _interopDefault(require('@material-ui/core/ListItemIcon'));
var ErrorIcon = _interopDefault(require('@material-ui/icons/Error'));
var ListItemText = _interopDefault(require('@material-ui/core/ListItemText'));
var styles = require('@material-ui/styles');
var Divider = _interopDefault(require('@material-ui/core/Divider'));
var FormControl = _interopDefault(require('@material-ui/core/FormControl'));
var FormHelperText = _interopDefault(require('@material-ui/core/FormHelperText'));
var Input = _interopDefault(require('@material-ui/core/Input'));
var InputLabel = _interopDefault(require('@material-ui/core/InputLabel'));
var Checkbox = _interopDefault(require('@material-ui/core/Checkbox'));
var FormControlLabel = _interopDefault(require('@material-ui/core/FormControlLabel'));
var FormLabel = _interopDefault(require('@material-ui/core/FormLabel'));
var FormGroup = _interopDefault(require('@material-ui/core/FormGroup'));
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var Radio = _interopDefault(require('@material-ui/core/Radio'));
var RadioGroup = _interopDefault(require('@material-ui/core/RadioGroup'));
var Slider = _interopDefault(require('@material-ui/core/Slider'));
var MenuItem = _interopDefault(require('@material-ui/core/MenuItem'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var AddButton = function AddButton(props) {
  return React.createElement(Button, Object.assign({}, props, {
    color: "secondary"
  }), React.createElement(AddIcon, null), " Add Item");
};

var mappings = {
  remove:
  /*#__PURE__*/
  React.createElement(Remove, null),
  plus:
  /*#__PURE__*/
  React.createElement(AddIcon, null),
  "arrow-up":
  /*#__PURE__*/
  React.createElement(ArrowUpward, null),
  "arrow-down":
  /*#__PURE__*/
  React.createElement(ArrowDownward, null)
};

var IconButton = function IconButton(props) {
  var icon = props.icon,
      otherProps = _objectWithoutPropertiesLoose(props, ["icon", "className"]);

  return React.createElement(Button, Object.assign({}, otherProps, {
    size: "small"
  }), mappings[icon]);
};

var isMultiSelect = core.utils.isMultiSelect,
    getDefaultRegistry = core.utils.getDefaultRegistry;

var ArrayFieldTemplate = function ArrayFieldTemplate(props) {
  var schema = props.schema,
      _props$registry = props.registry,
      registry = _props$registry === void 0 ? getDefaultRegistry() : _props$registry; // TODO: update types so we don't have to cast registry as any

  if (isMultiSelect(schema, registry.rootSchema)) {
    return React.createElement(DefaultFixedArrayFieldTemplate, Object.assign({}, props));
  } else {
    return React.createElement(DefaultNormalArrayFieldTemplate, Object.assign({}, props));
  }
};

var ArrayFieldTitle = function ArrayFieldTitle(_ref) {
  var TitleField = _ref.TitleField,
      idSchema = _ref.idSchema,
      title = _ref.title,
      required = _ref.required;

  if (!title) {
    return null;
  }

  var id = idSchema.$id + "__title";
  return React.createElement(TitleField, {
    id: id,
    title: title,
    required: required
  });
};

var ArrayFieldDescription = function ArrayFieldDescription(_ref2) {
  var DescriptionField = _ref2.DescriptionField,
      idSchema = _ref2.idSchema,
      description = _ref2.description;

  if (!description) {
    return null;
  }

  var id = idSchema.$id + "__description";
  return React.createElement(DescriptionField, {
    id: id,
    description: description
  });
}; // Used in the two templates


var DefaultArrayItem = function DefaultArrayItem(props) {
  var btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold'
  };
  return React.createElement(Grid, {
    container: true,
    key: props.key,
    alignItems: "center"
  }, React.createElement(Grid, {
    item: true,
    xs: true
  }, React.createElement(Box, {
    mb: 2
  }, React.createElement(Paper, {
    elevation: 2
  }, React.createElement(Box, {
    p: 2
  }, props.children)))), props.hasToolbar && React.createElement(Grid, {
    item: true
  }, (props.hasMoveUp || props.hasMoveDown) && React.createElement(IconButton, {
    icon: "arrow-up",
    className: "array-item-move-up",
    tabIndex: -1,
    style: btnStyle,
    disabled: props.disabled || props.readonly || !props.hasMoveUp,
    onClick: props.onReorderClick(props.index, props.index - 1)
  }), (props.hasMoveUp || props.hasMoveDown) && React.createElement(IconButton, {
    icon: "arrow-down",
    tabIndex: -1,
    style: btnStyle,
    disabled: props.disabled || props.readonly || !props.hasMoveDown,
    onClick: props.onReorderClick(props.index, props.index + 1)
  }), props.hasRemove && React.createElement(IconButton, {
    icon: "remove",
    tabIndex: -1,
    style: btnStyle,
    disabled: props.disabled || props.readonly,
    onClick: props.onDropIndexClick(props.index)
  })));
};

var DefaultFixedArrayFieldTemplate = function DefaultFixedArrayFieldTemplate(props) {
  return React.createElement("fieldset", {
    className: props.className
  }, React.createElement(ArrayFieldTitle, {
    key: "array-field-title-" + props.idSchema.$id,
    TitleField: props.TitleField,
    idSchema: props.idSchema,
    title: props.uiSchema['ui:title'] || props.title,
    required: props.required
  }), (props.uiSchema['ui:description'] || props.schema.description) && React.createElement("div", {
    className: "field-description",
    key: "field-description-" + props.idSchema.$id
  }, props.uiSchema['ui:description'] || props.schema.description), React.createElement("div", {
    className: "row array-item-list",
    key: "array-item-list-" + props.idSchema.$id
  }, props.items && props.items.map(DefaultArrayItem)), props.canAdd && React.createElement(AddButton, {
    className: "array-item-add",
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  }));
};

var DefaultNormalArrayFieldTemplate = function DefaultNormalArrayFieldTemplate(props) {
  return React.createElement(Paper, {
    elevation: 2
  }, React.createElement(Box, {
    p: 2
  }, React.createElement(ArrayFieldTitle, {
    key: "array-field-title-" + props.idSchema.$id,
    TitleField: props.TitleField,
    idSchema: props.idSchema,
    title: props.uiSchema['ui:title'] || props.title,
    required: props.required
  }), (props.uiSchema['ui:description'] || props.schema.description) && React.createElement(ArrayFieldDescription, {
    key: "array-field-description-" + props.idSchema.$id,
    DescriptionField: props.DescriptionField,
    idSchema: props.idSchema,
    description: props.uiSchema['ui:description'] || props.schema.description
  }), React.createElement(Grid, {
    container: true,
    key: "array-item-list-" + props.idSchema.$id
  }, props.items && props.items.map(function (p) {
    return DefaultArrayItem(p);
  }), props.canAdd && React.createElement(Grid, {
    container: true,
    justify: "flex-end"
  }, React.createElement(Grid, {
    item: true
  }, React.createElement(Box, {
    mt: 2
  }, React.createElement(AddButton, {
    className: "array-item-add",
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  })))))));
};

var ErrorList = function ErrorList(_ref) {
  var errors = _ref.errors;
  return React.createElement(Paper, {
    elevation: 2
  }, React.createElement(Box, {
    mb: 2,
    p: 2
  }, React.createElement(Typography, {
    variant: "h6"
  }, "Errors"), React.createElement(List, {
    dense: true
  }, errors.map(function (error, i) {
    return React.createElement(ListItem, {
      key: i
    }, React.createElement(ListItemIcon, null, React.createElement(ErrorIcon, {
      color: "error"
    })), React.createElement(ListItemText, {
      primary: error.stack
    }));
  }))));
};

var useStyles =
/*#__PURE__*/
styles.makeStyles({
  root: {
    marginTop: 5
  }
});

var DescriptionField = function DescriptionField(_ref) {
  var description = _ref.description;

  if (description) {
    var classes = useStyles();
    return React.createElement(Typography, {
      variant: "subtitle2",
      className: classes.root
    }, description);
  }

  return null;
};

var TitleField = function TitleField(_ref) {
  var title = _ref.title;
  return React.createElement(React.Fragment, null, React.createElement(Box, {
    mb: 1,
    mt: 1
  }, React.createElement(Typography, {
    variant: "h5"
  }, title), React.createElement(Divider, null)));
};

var Fields = {
  DescriptionField: DescriptionField,
  TitleField: TitleField
};

var ADDITIONAL_PROPERTY_FLAG = core.utils.ADDITIONAL_PROPERTY_FLAG;

var WrapIfAdditional = function WrapIfAdditional(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      id = _ref.id,
      label = _ref.label,
      onDropPropertyClick = _ref.onDropPropertyClick,
      onKeyChange = _ref.onKeyChange,
      readonly = _ref.readonly,
      required = _ref.required,
      schema = _ref.schema;
  var keyLabel = label + " Key"; // i18n ?

  var additional = schema.hasOwnProperty(ADDITIONAL_PROPERTY_FLAG);
  var btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold"
  };

  if (!additional) {
    return React.createElement(React.Fragment, null, children);
  }

  var handleBlur = function handleBlur(_ref2) {
    var target = _ref2.target;
    return onKeyChange(target.value);
  };

  return React.createElement(Grid, {
    container: true,
    key: id + "-key",
    alignItems: "center",
    spacing: 2
  }, React.createElement(Grid, {
    item: true,
    xs: true
  }, React.createElement(FormControl, {
    fullWidth: true,
    required: required
  }, React.createElement(InputLabel, null, keyLabel), React.createElement(Input, {
    defaultValue: label,
    disabled: disabled || readonly,
    id: id + "-key",
    name: id + "-key",
    onBlur: !readonly ? handleBlur : undefined,
    type: "text"
  }))), React.createElement(Grid, {
    item: true,
    xs: true
  }, children), React.createElement(Grid, {
    item: true
  }, React.createElement(IconButton, {
    icon: "remove",
    tabIndex: -1,
    style: btnStyle,
    disabled: disabled || readonly,
    onClick: onDropPropertyClick(label)
  })));
};

var FieldTemplate = function FieldTemplate(_ref) {
  var id = _ref.id,
      children = _ref.children,
      classNames = _ref.classNames,
      disabled = _ref.disabled,
      displayLabel = _ref.displayLabel,
      label = _ref.label,
      onDropPropertyClick = _ref.onDropPropertyClick,
      onKeyChange = _ref.onKeyChange,
      readonly = _ref.readonly,
      required = _ref.required,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors,
      rawHelp = _ref.rawHelp,
      rawDescription = _ref.rawDescription,
      schema = _ref.schema;
  return React.createElement(WrapIfAdditional, {
    classNames: classNames,
    disabled: disabled,
    id: id,
    label: label,
    onDropPropertyClick: onDropPropertyClick,
    onKeyChange: onKeyChange,
    readonly: readonly,
    required: required,
    schema: schema
  }, React.createElement(FormControl, {
    fullWidth: true,
    error: rawErrors.length ? true : false,
    required: required
  }, children, displayLabel && rawDescription ? React.createElement(Typography, {
    variant: "caption",
    color: "textSecondary"
  }, rawDescription) : null, rawErrors.length > 0 && React.createElement(List, {
    dense: true,
    disablePadding: true
  }, rawErrors.map(function (error, i) {
    return React.createElement(ListItem, {
      key: i,
      disableGutters: true
    }, React.createElement(FormHelperText, {
      id: id
    }, error));
  })), rawHelp && React.createElement(FormHelperText, {
    id: id
  }, rawHelp)));
};

var canExpand = core.utils.canExpand;
var useStyles$1 =
/*#__PURE__*/
styles.makeStyles({
  root: {
    marginTop: 10
  }
});

var ObjectFieldTemplate = function ObjectFieldTemplate(_ref) {
  var DescriptionField = _ref.DescriptionField,
      description = _ref.description,
      TitleField = _ref.TitleField,
      title = _ref.title,
      properties = _ref.properties,
      required = _ref.required,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      uiSchema = _ref.uiSchema,
      idSchema = _ref.idSchema,
      schema = _ref.schema,
      formData = _ref.formData,
      onAddClick = _ref.onAddClick;
  var classes = useStyles$1();
  return React.createElement(React.Fragment, null, (uiSchema['ui:title'] || title) && React.createElement(TitleField, {
    id: idSchema.$id + "-title",
    title: title,
    required: required
  }), description && React.createElement(DescriptionField, {
    id: idSchema.$id + "-description",
    description: description
  }), React.createElement(Grid, {
    container: true,
    spacing: 2,
    className: classes.root
  }, properties.map(function (element, index) {
    return React.createElement(Grid, {
      item: true,
      xs: 12,
      key: index,
      style: {
        marginBottom: '10px'
      }
    }, element.content);
  }), canExpand(schema, uiSchema, formData) && React.createElement(Grid, {
    container: true,
    justify: 'flex-end'
  }, React.createElement(Grid, {
    item: true
  }, React.createElement(AddButton, {
    className: 'object-property-expand',
    onClick: onAddClick(schema),
    disabled: disabled || readonly
  })))));
};

var schemaRequiresTrueValue = core.utils.schemaRequiresTrueValue;

var CheckboxWidget = function CheckboxWidget(props) {
  var schema = props.schema,
      id = props.id,
      value = props.value,
      disabled = props.disabled,
      readonly = props.readonly,
      label = props.label,
      autofocus = props.autofocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus; // Because an unchecked checkbox will cause html5 validation to fail, only add
  // the "required" attribute if the field value must be "true", due to the
  // "const" or "enum" keywords

  var required = schemaRequiresTrueValue(schema);

  var _onChange = function _onChange(_ref, checked) {
    _objectDestructuringEmpty(_ref);

    return onChange(checked);
  };

  var _onBlur = function _onBlur(_ref2) {
    var value = _ref2.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref3) {
    var value = _ref3.target.value;
    return onFocus(id, value);
  };

  return React.createElement(FormControlLabel, {
    control: React.createElement(Checkbox, {
      id: id,
      checked: typeof value === "undefined" ? false : value,
      required: required,
      disabled: disabled || readonly,
      autoFocus: autofocus,
      onChange: _onChange,
      onBlur: _onBlur,
      onFocus: _onFocus
    }),
    label: label
  });
};

var selectValue = function selectValue(value, selected, all) {
  var at = all.indexOf(value);
  var updated = selected.slice(0, at).concat(value, selected.slice(at)); // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order

  return updated.sort(function (a, b) {
    return all.indexOf(a) > all.indexOf(b);
  });
};

var deselectValue = function deselectValue(value, selected) {
  return selected.filter(function (v) {
    return v !== value;
  });
};

var CheckboxesWidget = function CheckboxesWidget(_ref) {
  var schema = _ref.schema,
      label = _ref.label,
      id = _ref.id,
      disabled = _ref.disabled,
      options = _ref.options,
      value = _ref.value,
      autofocus = _ref.autofocus,
      readonly = _ref.readonly,
      required = _ref.required,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled,
      inline = options.inline;

  var _onChange = function _onChange(option) {
    return function (_ref2) {
      var checked = _ref2.target.checked;
      var all = enumOptions.map(function (_ref3) {
        var value = _ref3.value;
        return value;
      });

      if (checked) {
        onChange(selectValue(option.value, value, all));
      } else {
        onChange(deselectValue(option.value, value));
      }
    };
  };

  var _onBlur = function _onBlur(_ref4) {
    var value = _ref4.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref5) {
    var value = _ref5.target.value;
    return onFocus(id, value);
  };

  return React.createElement(React.Fragment, null, React.createElement(FormLabel, {
    required: required,
    htmlFor: id
  }, label || schema.title), React.createElement(FormGroup, {
    row: !!inline
  }, enumOptions.map(function (option, index) {
    var checked = value.indexOf(option.value) !== -1;
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) != -1;
    var checkbox = React.createElement(Checkbox, {
      id: id + "_" + index,
      checked: checked,
      disabled: disabled || itemDisabled || readonly,
      autoFocus: autofocus && index === 0,
      onChange: _onChange(option),
      onBlur: _onBlur,
      onFocus: _onFocus
    });
    return React.createElement(FormControlLabel, {
      control: checkbox,
      key: index,
      label: option.label
    });
  })));
};

var getDisplayLabel = core.utils.getDisplayLabel;

var TextWidget = function TextWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      type = _ref.type,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus,
      options = _ref.options,
      schema = _ref.schema,
      uiSchema = _ref.uiSchema,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors,
      textFieldProps = _objectWithoutPropertiesLoose(_ref, ["id", "required", "readonly", "disabled", "type", "label", "value", "onChange", "onBlur", "onFocus", "autofocus", "options", "schema", "uiSchema", "rawErrors", "formContext"]);

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  var displayLabel = getDisplayLabel(schema, uiSchema
  /* TODO: , rootSchema */
  );
  return React.createElement(TextField, Object.assign({
    id: id,
    label: displayLabel ? label || schema.title : false,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    type: type || schema.type,
    value: value || value === 0 ? value : "",
    error: rawErrors.length > 0,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }, textFieldProps));
};

var ColorWidget = function ColorWidget(props) {
  return React.createElement(TextWidget, Object.assign({
    type: "color"
  }, props));
};

var DateWidget = function DateWidget(props) {
  return React.createElement(TextWidget, Object.assign({
    type: "date",
    InputLabelProps: {
      shrink: true
    }
  }, props));
};

var localToUTC = core.utils.localToUTC,
    utcToLocal = core.utils.utcToLocal;

var DateTimeWidget = function DateTimeWidget(props) {
  var value = utcToLocal(props.value);

  var onChange = function onChange(value) {
    props.onChange(localToUTC(value));
  };

  return React.createElement(TextWidget, Object.assign({
    type: "datetime-local",
    InputLabelProps: {
      shrink: true
    }
  }, props, {
    value: value,
    onChange: onChange
  }));
};

var EmailWidget = function EmailWidget(props) {
  return React.createElement(TextWidget, Object.assign({
    type: "email"
  }, props));
};

var PasswordWidget = function PasswordWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      value = _ref.value,
      label = _ref.label,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      options = _ref.options,
      autofocus = _ref.autofocus,
      schema = _ref.schema,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(TextField, {
    id: id,
    label: label || schema.title,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    type: "password",
    value: value ? value : "",
    error: rawErrors.length > 0,
    onFocus: _onFocus,
    onBlur: _onBlur,
    onChange: _onChange
  });
};

var RadioWidget = function RadioWidget(_ref) {
  var id = _ref.id,
      schema = _ref.schema,
      options = _ref.options,
      value = _ref.value,
      required = _ref.required,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      label = _ref.label,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;

  var _onChange = function _onChange(_ref2, value) {
    _objectDestructuringEmpty(_ref2);

    return onChange(schema.type == "boolean" ? value !== "false" : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  var row = options ? options.inline : false;
  return React.createElement(React.Fragment, null, React.createElement(FormLabel, {
    required: required,
    htmlFor: id
  }, label || schema.title), React.createElement(RadioGroup, {
    value: "" + value,
    row: row,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }, enumOptions.map(function (option, i) {
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) != -1;
    var radio = React.createElement(FormControlLabel, {
      control: React.createElement(Radio, {
        color: "primary",
        key: i
      }),
      label: "" + option.label,
      value: "" + option.value,
      key: i,
      disabled: disabled || itemDisabled || readonly
    });
    return radio;
  })));
};

var rangeSpec = core.utils.rangeSpec;

var RangeWidget = function RangeWidget(_ref) {
  var value = _ref.value,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      options = _ref.options,
      schema = _ref.schema,
      onChange = _ref.onChange,
      required = _ref.required,
      label = _ref.label,
      id = _ref.id;

  var sliderProps = _extends({
    value: value,
    label: label,
    id: id
  }, rangeSpec(schema));

  var _onChange = function _onChange(_ref2, value) {
    _objectDestructuringEmpty(_ref2);

    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(React.Fragment, null, React.createElement(FormLabel, {
    required: required,
    id: id
  }, label), React.createElement(Slider, Object.assign({
    disabled: disabled || readonly,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus,
    valueLabelDisplay: "auto"
  }, sliderProps)));
};

var asNumber = core.utils.asNumber,
    guessType = core.utils.guessType;
var nums =
/*#__PURE__*/
new Set(["number", "integer"]);
/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */

var processValue = function processValue(schema, value) {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  var type = schema.type,
      items = schema.items;

  if (value === "") {
    return undefined;
  } else if (type === "array" && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === "boolean") {
    return value === "true";
  } else if (type === "number") {
    return asNumber(value);
  } // If type is undefined, but an enum is present, try and infer the type from
  // the enum values


  if (schema["enum"]) {
    if (schema["enum"].every(function (x) {
      return guessType(x) === "number";
    })) {
      return asNumber(value);
    } else if (schema["enum"].every(function (x) {
      return guessType(x) === "boolean";
    })) {
      return value === "true";
    }
  }

  return value;
};

var SelectWidget = function SelectWidget(_ref) {
  var schema = _ref.schema,
      id = _ref.id,
      options = _ref.options,
      label = _ref.label,
      required = _ref.required,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      value = _ref.value,
      multiple = _ref.multiple,
      autofocus = _ref.autofocus,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;
  var emptyValue = multiple ? [] : "";

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(processValue(schema, value));
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, processValue(schema, value));
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, processValue(schema, value));
  };

  return React.createElement(TextField, {
    id: id,
    label: label || schema.title,
    select: true,
    value: typeof value === "undefined" ? emptyValue : value,
    required: required,
    disabled: disabled || readonly,
    autoFocus: autofocus,
    error: rawErrors.length > 0,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus,
    InputLabelProps: {
      shrink: true
    },
    SelectProps: {
      multiple: typeof multiple === "undefined" ? false : multiple
    }
  }, enumOptions.map(function (_ref5, i) {
    var value = _ref5.value,
        label = _ref5.label;
    var disabled = enumDisabled && enumDisabled.indexOf(value) != -1;
    return React.createElement(MenuItem, {
      key: i,
      value: value,
      disabled: disabled
    }, label);
  }));
};

var TextareaWidget = function TextareaWidget(_ref) {
  var id = _ref.id,
      placeholder = _ref.placeholder,
      value = _ref.value,
      required = _ref.required,
      disabled = _ref.disabled,
      autofocus = _ref.autofocus,
      label = _ref.label,
      readonly = _ref.readonly,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      options = _ref.options,
      schema = _ref.schema,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(TextField, {
    id: id,
    label: label || schema.title,
    placeholder: placeholder,
    disabled: disabled || readonly,
    value: value,
    required: required,
    autoFocus: autofocus,
    multiline: true,
    rows: options.rows || 5,
    error: rawErrors.length > 0,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  });
};

var UpDownWidget = function UpDownWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(FormControl, {
    fullWidth: true,
    //error={!!rawErrors}
    required: required
  }, React.createElement(InputLabel, null, label), React.createElement(Input, {
    id: id,
    autoFocus: autofocus,
    required: required,
    type: "number",
    disabled: disabled || readonly,
    value: value ? value : '',
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var URLWidget = function URLWidget(props) {
  return React.createElement(TextWidget, Object.assign({
    type: "url"
  }, props));
};

var Widgets = {
  CheckboxWidget: CheckboxWidget,
  CheckboxesWidget: CheckboxesWidget,
  ColorWidget: ColorWidget,
  DateWidget: DateWidget,
  DateTimeWidget: DateTimeWidget,
  EmailWidget: EmailWidget,
  PasswordWidget: PasswordWidget,
  RadioWidget: RadioWidget,
  RangeWidget: RangeWidget,
  SelectWidget: SelectWidget,
  TextareaWidget: TextareaWidget,
  TextWidget: TextWidget,
  UpDownWidget: UpDownWidget,
  URLWidget: URLWidget
};

var getDefaultRegistry$1 = core.utils.getDefaultRegistry;

var _getDefaultRegistry =
/*#__PURE__*/
getDefaultRegistry$1(),
    fields = _getDefaultRegistry.fields,
    widgets = _getDefaultRegistry.widgets;

var DefaultChildren = function DefaultChildren() {
  return React.createElement(Box, {
    marginTop: 3
  }, React.createElement(Button, {
    type: "submit",
    variant: "contained",
    color: "primary"
  }, "Submit"));
};

var Theme = {
  children:
  /*#__PURE__*/
  React.createElement(DefaultChildren, null),
  ArrayFieldTemplate: ArrayFieldTemplate,
  fields:
  /*#__PURE__*/
  _extends({}, fields, {}, Fields),
  FieldTemplate: FieldTemplate,
  ObjectFieldTemplate: ObjectFieldTemplate,
  widgets:
  /*#__PURE__*/
  _extends({}, widgets, {}, Widgets),
  ErrorList: ErrorList
};

var MuiForm =
/*#__PURE__*/
core.withTheme(Theme);

exports.FieldTemplate = FieldTemplate;
exports.Fields = Fields;
exports.MuiForm = MuiForm;
exports.ObjectFieldTemplate = ObjectFieldTemplate;
exports.Theme = Theme;
exports.Widgets = Widgets;
exports.default = MuiForm;
//# sourceMappingURL=material-ui.cjs.development.js.map
