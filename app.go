package main

import (
	"context"
	"fmt"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) shutdown(ctx context.Context) {}

type SubmitParams struct {
	Target   string `json:"target"`
	Username string `json:"username"`
	Password string `json:"password"`
	Key      string `json:"key"`
	LogLevel string `json:"log_level"`
}

// Submit returns a greeting for the given info
func (a *App) Submit(sp SubmitParams) string {
	return fmt.Sprintf(`
		collect info: target: %s username: %s password: %s key: %s logLevel: %s
		`, sp.Target, sp.Username, sp.Password, sp.Key, sp.LogLevel)
}
